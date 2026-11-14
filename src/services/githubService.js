import { extractReadmeSummary } from "../domain/projectCatalog";

const CACHE_KEY_PREFIX = "portfolio_github_cache_v1_";
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutos

const readSessionCache = (username) => {
  try {
    const raw = sessionStorage.getItem(`${CACHE_KEY_PREFIX}${username}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.timestamp > CACHE_TTL_MS) {
      sessionStorage.removeItem(`${CACHE_KEY_PREFIX}${username}`);
      return null;
    }
    return parsed.data;
  } catch {
    return null;
  }
};

const writeSessionCache = (username, data) => {
  try {
    sessionStorage.setItem(
      `${CACHE_KEY_PREFIX}${username}`,
      JSON.stringify({ timestamp: Date.now(), data })
    );
  } catch {
    // Ignora falhas de quota ou modo privado do navegador
  }
};

const fetchRepoReadmeSummary = async (username, repoName, signal) => {
  const branches = ["main", "master"];

  for (const branch of branches) {
    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/${username}/${repoName}/${branch}/README.md`,
        { signal }
      );
      if (response.ok) {
        const text = await response.text();
        const summary = extractReadmeSummary(text);
        if (summary) return summary;
      }
    } catch (err) {
      if (err.name === "AbortError") throw err;
    }
  }

  return null;
};

/**
 * Busca perfil e repositórios públicos do GitHub com suporte a cache de sessão e AbortController.
 */
export const fetchGithubPortfolioData = async (username, { signal } = {}) => {
  const cached = readSessionCache(username);
  if (cached) {
    return cached;
  }

  let userProfile = null;

  const userRes = await fetch(`https://api.github.com/users/${username}`, { signal });
  if (userRes.ok) {
    userProfile = await userRes.json();
  }

  const reposRes = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    { signal }
  );

  if (!reposRes.ok) {
    throw new Error(`GitHub API Error: ${reposRes.status}`);
  }

  const rawRepos = await reposRes.json();

  const repos = await Promise.all(
    rawRepos
      .filter((repo) => !repo.fork)
      .map(async (repo) => {
        let finalDescription = repo.description;

        if (!finalDescription || finalDescription.length < 20) {
          const summary = await fetchRepoReadmeSummary(username, repo.name, signal);
          if (summary) {
            finalDescription = summary;
          }
        }

        return {
          id: repo.id,
          name: repo.name,
          fullName: repo.full_name,
          description:
            finalDescription ||
            "Projeto de desenvolvimento de software disponível no GitHub.",
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language || "Código",
          topics: repo.topics || [],
          githubUrl: repo.html_url,
          homepage: repo.homepage,
          updatedAt: new Date(repo.updated_at).toLocaleDateString("pt-BR"),
        };
      })
  );

  const payload = { userProfile, repos };
  writeSessionCache(username, payload);
  return payload;
};
