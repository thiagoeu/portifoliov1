import { PROJECT_METADATA_OVERRIDES } from "../constants/projectMetadata.js";

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
 * Classifica deterministicamente um projeto em uma categoria especializada de engenharia.
 * Utiliza limites de palavra (Word Boundary Regex) e tópicos estruturados do GitHub.
 */
export const detectCategory = (
  name = "",
  description = "",
  language = "",
  topics = [],
  skills = []
) => {
  const normalizedKey = name.toLowerCase();

  // 1. Checa se há curadoria explícita definida
  if (PROJECT_METADATA_OVERRIDES[normalizedKey]?.category) {
    return PROJECT_METADATA_OVERRIDES[normalizedKey].category;
  }

  const topicList = (topics || []).map((t) => t.toLowerCase());
  const topicSet = new Set(topicList);
  const combinedText = `${name} ${description} ${language} ${topicList.join(" ")} ${(skills || []).join(" ")}`.toLowerCase();

  // 2. Inteligência Artificial, Ciência de Dados & Machine Learning
  // Usamos \b para garantir que 'ai' ou 'ia' só casem como palavras isoladas (evita 'mailer', 'email', 'painel')
  const isAiOrData =
    /\b(ai|ia|machine\s*learning|data\s*science|data\s*mining|langgraph|llm|genai|scikit|pandas|numpy|ollama|deep\s*learning|nlp|neural)\b/i.test(
      combinedText
    ) ||
    topicSet.has("ai") ||
    topicSet.has("machine-learning") ||
    topicSet.has("data-science") ||
    topicSet.has("data-mining") ||
    topicSet.has("langgraph") ||
    topicSet.has("genai") ||
    topicSet.has("prompt-engineering");

  if (isAiOrData) {
    return "IA & Ciência de Dados";
  }

  // 3. Sistemas Embarcados & IoT
  const isIotOrEmbedded =
    /\b(esp32|arduino|iot|mqtt|embedded|microcontrolador|aedes|m2m|firmware)\b/i.test(
      combinedText
    ) ||
    topicSet.has("iot") ||
    topicSet.has("esp32") ||
    topicSet.has("arduino") ||
    topicSet.has("mqtt") ||
    topicSet.has("automation");

  if (isIotOrEmbedded) {
    return "Sistemas Embarcados & IoT";
  }

  // 4. Full Stack
  const isFullStack =
    /\b(fullstack|full-stack|full\s+stack)\b/i.test(combinedText) ||
    topicSet.has("fullstack") ||
    ((topicSet.has("react") || topicSet.has("vue") || topicSet.has("nextjs")) &&
      (topicSet.has("nestjs") ||
        topicSet.has("nodejs") ||
        topicSet.has("express") ||
        topicSet.has("fastify") ||
        topicSet.has("go")));

  if (isFullStack) {
    return "Full Stack";
  }

  // 5. Frontend & Mobile
  const isFrontendOrMobile =
    /\b(frontend|react-native|expo|mobile|cardapio|css3|html5|tailwind|vite)\b/i.test(
      combinedText
    ) ||
    topicSet.has("frontend") ||
    topicSet.has("mobile") ||
    topicSet.has("react-native") ||
    topicSet.has("expo") ||
    topicSet.has("tailwind-css");

  if (isFrontendOrMobile) {
    return "Frontend & Mobile";
  }

  // 6. Backend & Microsserviços (Fallback natural para APIs, servidores, mensageria e serviços)
  return "Backend & Microsserviços";
};

/**
 * Mescla projetos estáticos (destaques locais) com repositórios remotos do GitHub,
 * aplicando a tabela declarativa de curadoria (PROJECT_METADATA_OVERRIDES).
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
    const key = p.name.toLowerCase();
    const override = PROJECT_METADATA_OVERRIDES[key];

    if (override?.hidden) return;

    allProjectsMap.set(key, {
      id: `static-${key}`,
      name: override?.displayName || p.name,
      description: override?.description || p.description,
      skills: override?.skills || p.skills || [],
      githubUrl: p.github,
      deployUrl: override?.deployUrl || p.deploy,
      category: override?.category || p.category,
      isFeatured: override?.isFeatured ?? true,
      priority: override?.priority ?? 20,
      stars: 0,
      language: p.skills?.[0] || "Code",
    });
  });

  remoteRepos.forEach((repo) => {
    const key = repo.name.toLowerCase();
    const override = PROJECT_METADATA_OVERRIDES[key];

    // Oculta repositórios explicitamente marcados como escondidos (ex: repositório especial de README de perfil)
    if (override?.hidden) return;

    const existing = allProjectsMap.get(key);

    const inferredCategory = detectCategory(
      repo.name,
      repo.description,
      repo.language,
      repo.topics,
      existing ? existing.skills : []
    );

    const resolvedCategory = override?.category || inferredCategory;
    const resolvedName = override?.displayName || existing?.name || repo.name;
    const resolvedDescription =
      override?.description ||
      existing?.description ||
      repo.description ||
      "Projeto de desenvolvimento de software disponível no GitHub.";
    const resolvedSkills =
      override?.skills ||
      existing?.skills ||
      Array.from(new Set([repo.language, ...(repo.topics || [])].filter(Boolean)));
    const resolvedIsFeatured = override?.isFeatured ?? (existing ? existing.isFeatured : false);
    const resolvedDeploy = override?.deployUrl || repo.homepage || existing?.deployUrl || null;
    const resolvedPriority = override?.priority ?? (resolvedIsFeatured ? 20 : 99);

    allProjectsMap.set(key, {
      id: existing ? existing.id : `gh-${repo.id}`,
      name: resolvedName,
      description: resolvedDescription,
      skills: resolvedSkills,
      githubUrl: repo.githubUrl || existing?.githubUrl,
      deployUrl: resolvedDeploy,
      category: resolvedCategory,
      isFeatured: resolvedIsFeatured,
      priority: resolvedPriority,
      stars: repo.stars ?? existing?.stars ?? 0,
      forks: repo.forks ?? existing?.forks ?? 0,
      language: repo.language || existing?.language || "Código",
      updatedAt: repo.updatedAt || existing?.updatedAt,
    });
  });

  return Array.from(allProjectsMap.values()).sort((a, b) => {
    // 1. Destaques primeiro
    if (a.isFeatured !== b.isFeatured) {
      return a.isFeatured ? -1 : 1;
    }
    // 2. Ordem de prioridade explícita (menor número = mais prioritário)
    if (a.priority !== b.priority) {
      return a.priority - b.priority;
    }
    // 3. Projetos com link de deploy ativo primeiro
    if (Boolean(a.deployUrl) !== Boolean(b.deployUrl)) {
      return a.deployUrl ? -1 : 1;
    }
    // 4. Quantidade de estrelas
    if (a.stars !== b.stars) {
      return b.stars - a.stars;
    }
    return a.name.localeCompare(b.name);
  });
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
    case "Backend & Microsserviços":
      return "bg-slate-900 text-sky-300 border-sky-500/40";
    case "Frontend & Mobile":
      return "bg-cyan-950/80 text-cyan-300 border-cyan-500/40";
    case "IA & Ciência de Dados":
      return "bg-teal-950/80 text-teal-300 border-teal-500/40";
    case "Sistemas Embarcados & IoT":
      return "bg-emerald-950/80 text-emerald-300 border-emerald-500/40";
    default:
      return "bg-slate-900 text-slate-300 border-slate-700";
  }
};
