/**
 * Extrai até dois parágrafos limpos de um texto Markdown bruto de README.
 */
export const extractReadmeSummary = (markdownText) => {
  if (!markdownText) return null;

  const lines = markdownText.split("\n");
  const cleanParagraphs = [];

  for (const line of lines) {
    const trimmed = line.trim();
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

    const cleanLine = trimmed
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[*_~`]/g, "");

    if (cleanLine.length > 25) {
      cleanParagraphs.push(cleanLine);
      if (cleanParagraphs.length >= 2) break;
    }
  }

  return cleanParagraphs.length > 0 ? cleanParagraphs.join(" ") : null;
};

/**
 * Classifica deterministicamente um projeto em uma categoria de engenharia.
 */
export const detectCategory = (
  name = "",
  description = "",
  language = "",
  topics = [],
  skills = []
) => {
  const combined = `${name} ${description} ${language} ${topics.join(" ")} ${skills.join(" ")}`.toLowerCase();

  if (
    combined.includes("fullstack") ||
    combined.includes("full-stack") ||
    combined.includes("full stack") ||
    (combined.includes("react") &&
      (combined.includes("node") ||
        combined.includes("api") ||
        combined.includes("express"))) ||
    (combined.includes("esp32") && combined.includes("html"))
  ) {
    return "Full Stack";
  }

  if (
    combined.includes("heart") ||
    combined.includes("predict") ||
    combined.includes("music") ||
    combined.includes("recommend") ||
    combined.includes("pandas") ||
    combined.includes("sklearn") ||
    combined.includes("ia") ||
    combined.includes("ai") ||
    combined.includes("machine learning") ||
    combined.includes("jupyter")
  ) {
    return "Analise de dados e IA";
  }

  if (
    combined.includes("cardapio") ||
    combined.includes("hamburgueria") ||
    combined.includes("portifolio") ||
    combined.includes("react") ||
    combined.includes("tailwind") ||
    combined.includes("html") ||
    combined.includes("css") ||
    combined.includes("frontend")
  ) {
    return "Frontend";
  }

  return "Backend";
};

/**
 * Mescla projetos estáticos (destaques locais) com repositórios remotos do GitHub.
 */
export const mergeStaticAndRemoteProjects = (staticCategories = [], remoteRepos = []) => {
  const allProjectsMap = new Map();

  const flattenedStatic = staticCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      ...item,
      category: cat.title,
      isFeatured: true,
    }))
  );

  flattenedStatic.forEach((p) => {
    allProjectsMap.set(p.name.toLowerCase(), {
      id: `static-${p.name.toLowerCase()}`,
      name: p.name,
      description: p.description,
      skills: p.skills || [],
      githubUrl: p.github,
      deployUrl: p.deploy,
      category: p.category,
      isFeatured: true,
      stars: 0,
      language: p.skills?.[0] || "Code",
    });
  });

  remoteRepos.forEach((repo) => {
    const key = repo.name.toLowerCase();
    const existing = allProjectsMap.get(key);

    const inferredCategory = detectCategory(
      repo.name,
      repo.description,
      repo.language,
      repo.topics,
      existing ? existing.skills : []
    );

    if (existing) {
      allProjectsMap.set(key, {
        ...existing,
        stars: repo.stars,
        forks: repo.forks,
        githubUrl: repo.githubUrl,
        deployUrl: repo.homepage || existing.deployUrl,
        updatedAt: repo.updatedAt,
        topics: repo.topics,
      });
    } else {
      allProjectsMap.set(key, {
        id: `gh-${repo.id}`,
        name: repo.name,
        description: repo.description,
        skills: Array.from(new Set([repo.language, ...(repo.topics || [])].filter(Boolean))),
        githubUrl: repo.githubUrl,
        deployUrl: repo.homepage || null,
        category: inferredCategory,
        isFeatured: false,
        stars: repo.stars,
        forks: repo.forks,
        language: repo.language || "Código",
        updatedAt: repo.updatedAt,
      });
    }
  });

  return Array.from(allProjectsMap.values());
};

/**
 * Filtra lista de projetos por termo de pesquisa textual e categoria selecionada.
 */
export const filterProjects = (projects = [], searchTerm = "", selectedFilter = "Todos") => {
  const normalizedQuery = searchTerm.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesSearch =
      !normalizedQuery ||
      project.name.toLowerCase().includes(normalizedQuery) ||
      project.description.toLowerCase().includes(normalizedQuery) ||
      project.skills.some((s) => s.toLowerCase().includes(normalizedQuery)) ||
      project.category.toLowerCase().includes(normalizedQuery);

    if (!matchesSearch) return false;
    if (selectedFilter === "Todos") return true;
    if (selectedFilter === "Destaques") return Boolean(project.isFeatured);

    return (
      project.category === selectedFilter || project.language === selectedFilter
    );
  });
};

/**
 * Retorna as classes visuais correspondentes ao badge de cada categoria.
 */
export const getCategoryBadgeStyle = (category) => {
  switch (category) {
    case "Full Stack":
      return "bg-gradient-to-r from-sky-950 to-emerald-950 text-emerald-300 border-emerald-500/40 shadow-sm";
    case "Backend":
      return "bg-slate-900 text-sky-300 border-sky-500/40";
    case "Frontend":
      return "bg-cyan-950/80 text-cyan-300 border-cyan-500/40";
    case "Analise de dados e IA":
      return "bg-emerald-950/80 text-emerald-300 border-emerald-500/40";
    default:
      return "bg-slate-900 text-slate-300 border-slate-700";
  }
};
