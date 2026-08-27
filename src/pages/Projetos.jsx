import { useState } from "react";
import { FaGithub, FaStar, FaExternalLinkAlt, FaSearch, FaSync, FaFolderOpen, FaRocket, FaTag } from "react-icons/fa";
import { useGithubRepos } from "../hooks/useGithubRepos";
import staticProjects from "../data/projects.jsx";

// Helper function to infer category if not explicitly set
const detectCategory = (name = "", description = "", language = "", topics = [], skills = []) => {
  const combined = `${name} ${description} ${language} ${topics.join(" ")} ${skills.join(" ")}`.toLowerCase();

  if (
    combined.includes("fullstack") ||
    combined.includes("full-stack") ||
    combined.includes("full stack") ||
    (combined.includes("react") && (combined.includes("node") || combined.includes("api") || combined.includes("express"))) ||
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

  if (
    combined.includes("api") ||
    combined.includes("email") ||
    combined.includes("esp32") ||
    combined.includes("node") ||
    combined.includes("express") ||
    combined.includes("go") ||
    combined.includes("golang") ||
    combined.includes("backend") ||
    combined.includes("docker") ||
    combined.includes("server") ||
    combined.includes("c++")
  ) {
    return "Backend";
  }

  return "Backend"; // Default fallback
};

const Projetos = () => {
  const { repos, userProfile, loading } = useGithubRepos("thiagoeu");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Todos");

  // Flatten local projects
  const flattenedStaticProjects = staticProjects.flatMap((cat) =>
    cat.items.map((item) => ({
      ...item,
      category: cat.title,
      isFeatured: true,
    }))
  );

  // Merge GitHub Repos & Static Projects
  const allProjectsMap = new Map();

  // 1. Add static projects first
  flattenedStaticProjects.forEach((p) => {
    allProjectsMap.set(p.name.toLowerCase(), {
      id: p.name,
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

  // 2. Supplement or Add GitHub Repos
  repos.forEach((repo) => {
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
      existing.stars = repo.stars;
      existing.forks = repo.forks;
      existing.githubUrl = repo.githubUrl;
      if (repo.homepage) existing.deployUrl = repo.homepage;
      existing.updatedAt = repo.updatedAt;
      existing.topics = repo.topics;
    } else {
      allProjectsMap.set(key, {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        skills: Array.from(new Set([repo.language, ...repo.topics].filter(Boolean))),
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

  const mergedProjects = Array.from(allProjectsMap.values());

  // Filter projects by search and category
  const filteredProjects = mergedProjects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedFilter === "Todos") return matchesSearch;
    if (selectedFilter === "Destaques") return matchesSearch && project.isFeatured;
    return matchesSearch && (project.category === selectedFilter || project.language === selectedFilter);
  });

  const categories = ["Todos", "Destaques", "Full Stack", "Backend", "Frontend", "Analise de dados e IA"];

  const getCategoryBadgeStyle = (category) => {
    switch (category) {
      case "Full Stack":
        return "bg-gradient-to-r from-purple-950 to-cyan-950 text-cyan-300 border-cyan-400/50 shadow-sm";
      case "Backend":
        return "bg-purple-950/80 text-purple-300 border-purple-500/40";
      case "Frontend":
        return "bg-cyan-950/80 text-cyan-300 border-cyan-500/40";
      case "Analise de dados e IA":
        return "bg-emerald-950/80 text-emerald-300 border-emerald-500/40";
      default:
        return "bg-slate-900 text-slate-300 border-slate-700";
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full py-16 px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Header Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-950/60 px-4 py-1.5 text-xs font-mono text-cyan-400 border border-cyan-500/30">
            <FaFolderOpen size={14} />
            <span>Sincronização em Tempo Real com GitHub</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Meus <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projetos</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Repositórios e projetos práticos com classificação por categoria (Full Stack, Backend, Frontend, IA & Dados).
          </p>

          {/* User GitHub Profile Header Bar */}
          {userProfile && (
            <div className="inline-flex items-center gap-6 glass-card px-5 py-2.5 rounded-2xl border border-slate-800 text-xs font-mono text-slate-300">
              <span>Repos: <strong className="text-cyan-400">{userProfile.public_repos}</strong></span>
              <span>Seguidores: <strong className="text-purple-400">{userProfile.followers}</strong></span>
              <span>GitHub: <strong className="text-emerald-400">@thiagoeu</strong></span>
            </div>
          )}
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto bg-slate-900/80 p-4 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-md">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <FaSearch className="absolute left-3.5 top-3.5 text-slate-400" size={14} />
            <input
              type="text"
              placeholder="Buscar por nome, tag ou tecnologia..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 text-slate-200 placeholder-slate-500 text-sm border border-slate-800 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                  selectedFilter === cat
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/20"
                    : "bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="flex items-center justify-center py-16 gap-3 text-cyan-400 font-mono text-sm">
            <FaSync className="animate-spin" size={18} />
            <span>Sincronizando repositórios do GitHub...</span>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header Category & Language Badges */}
                <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    {/* Category Tag */}
                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border flex items-center gap-1 font-semibold ${getCategoryBadgeStyle(
                        project.category
                      )}`}
                    >
                      <FaTag size={9} />
                      {project.category}
                    </span>

                    {/* Primary Language */}
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {project.language || "Code"}
                    </span>
                  </div>

                  {project.stars > 0 && (
                    <span className="flex items-center gap-1 text-xs font-mono text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/20">
                      <FaStar size={11} /> {project.stars}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Skill Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.skills.slice(0, 6).map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono bg-slate-900 text-slate-300 px-2 py-1 rounded border border-slate-800 hover:border-cyan-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-200 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <FaGithub size={14} className="text-slate-300" />
                    <span>GitHub</span>
                  </a>
                )}

                {project.deployUrl ? (
                  <a
                    href={project.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-500/20 transition-all duration-300"
                  >
                    <FaRocket size={12} />
                    <span>Live Demo</span>
                    <FaExternalLinkAlt size={10} />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-slate-400 italic">
                    {project.updatedAt ? `Atualizado: ${project.updatedAt}` : "Repositório Git"}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-16 glass-card rounded-2xl border border-slate-800 space-y-3">
            <p className="text-slate-400 text-base">Nenhum projeto encontrado para o termo pesquisado.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedFilter("Todos");
              }}
              className="text-xs font-mono text-cyan-400 underline hover:text-cyan-300"
            >
              Limpar filtros de busca
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projetos;
