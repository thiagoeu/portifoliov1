import { useState, useEffect } from "react";

// Helper function to extract a clean summary paragraph from raw markdown text
const extractReadmeSummary = (markdownText) => {
  if (!markdownText) return null;

  // Split into lines
  const lines = markdownText.split("\n");
  const cleanParagraphs = [];

  for (let line of lines) {
    let trimmed = line.trim();
    // Skip empty lines, headers (#), badges (![...]), image tags, HTML tags, or divider lines (---)
    if (
      !trimmed ||
      trimmed.startsWith("#") ||
      trimmed.startsWith("!") ||
      trimmed.startsWith("<") ||
      trimmed.startsWith("---") ||
      trimmed.startsWith("```") ||
      trimmed.startsWith("[!")
    ) {
      continue;
    }

    // Strip markdown links [text](url) -> text
    let cleanLine = trimmed
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[*_~`]/g, "");

    if (cleanLine.length > 25) {
      cleanParagraphs.push(cleanLine);
      if (cleanParagraphs.length >= 2) break; // Grab first 2 good paragraphs
    }
  }

  return cleanParagraphs.length > 0 ? cleanParagraphs.join(" ") : null;
};

export const useGithubRepos = (username = "thiagoeu") => {
  const [repos, setRepos] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchGithubData = async () => {
      try {
        setLoading(true);
        
        // 1. Fetch User Profile
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (userRes.ok) {
          const userData = await userRes.json();
          if (isMounted) setUserProfile(userData);
        }

        // 2. Fetch Public Repositories
        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
        );

        if (!reposRes.ok) {
          throw new Error(`GitHub API Error: ${reposRes.status}`);
        }

        const rawRepos = await reposRes.json();
        
        // 3. Process repos and optionally fetch README for deeper descriptions
        const formattedRepos = await Promise.all(
          rawRepos
            .filter((repo) => !repo.fork)
            .map(async (repo) => {
              let finalDescription = repo.description;

              // If description is missing or short, attempt to fetch README.md
              if (!finalDescription || finalDescription.length < 20) {
                try {
                  // Try main branch first, then master
                  let readmeRes = await fetch(
                    `https://raw.githubusercontent.com/${username}/${repo.name}/main/README.md`
                  );
                  if (!readmeRes.ok) {
                    readmeRes = await fetch(
                      `https://raw.githubusercontent.com/${username}/${repo.name}/master/README.md`
                    );
                  }

                  if (readmeRes.ok) {
                    const readmeText = await readmeRes.text();
                    const summary = extractReadmeSummary(readmeText);
                    if (summary) {
                      finalDescription = summary;
                    }
                  }
                } catch {
                  // Fallback description if fetch fails
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

        if (isMounted) {
          setRepos(formattedRepos);
          setError(null);
        }
      } catch (err) {
        console.warn("Could not load GitHub repos live, using fallback data", err);
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchGithubData();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return { repos, userProfile, loading, error };
};

