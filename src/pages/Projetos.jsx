import { useState, useMemo } from "react";
import {
  FaGithub,
  FaStar,
  FaExternalLinkAlt,
  FaSearch,
  FaSync,
  FaFolderOpen,
  FaRocket,
  FaTag,
} from "react-icons/fa";
import { useGithubRepos } from "../hooks/useGithubRepos";
import staticProjects from "../data/projects.jsx";
import { PROFILE, PROJECT_CATEGORIES } from "../constants/profile";
import {
  mergeStaticAndRemoteProjects,
  filterProjects,
  getCategoryBadgeStyle,
} from "../domain/projectCatalog";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import CategoryFilterBar from "../components/ui/CategoryFilterBar.jsx";

const Projetos = () => {
  const { repos, userProfile, loading } = useGithubRepos(PROFILE.githubUsername);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Todos");

  const mergedProjects = useMemo(
    () => mergeStaticAndRemoteProjects(staticProjects, repos),
    [repos]
  );

  const filteredProjects = useMemo(
    () => filterProjects(mergedProjects, searchTerm, selectedFilter),
    [mergedProjects, searchTerm, selectedFilter]
  );

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full py-16 px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          badgeIcon={FaFolderOpen}
          badgeText="Sincronização em Tempo Real com GitHub"
          titlePrefix="Meus"
          titleHighlight="Projetos"
          description="Repositórios e projetos práticos classificados por área de especialização da Engenharia de Software."
        >
          {userProfile && (
            <div className="inline-flex items-center gap-6 glass-card px-5 py-2.5 rounded-2xl border border-slate-800 text-xs font-mono text-slate-300">
              <span>
                Repos:{" "}
                <strong className="text-cyan-400">
                  {userProfile.public_repos}
                </strong>
              </span>
              <span>
                Seguidores:{" "}
                <strong className="text-sky-400">
                  {userProfile.followers}
                </strong>
              </span>
              <span>
                GitHub:{" "}
                <strong className="text-emerald-400">
                  @{PROFILE.githubUsername}
                </strong>
              </span>
            </div>
          )}
        </SectionHeader>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto bg-slate-900/80 p-4 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-md">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <FaSearch
              className="absolute left-3.5 top-3.5 text-slate-400"
              size={14}
            />
            <input
              id="project-search"
              type="text"
              aria-label="Buscar projetos por nome, tag ou tecnologia"
              placeholder="Buscar por nome, tag ou tecnologia..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 text-slate-200 placeholder-slate-500 text-sm border border-slate-800 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          {/* Category Filter Buttons */}
          <CategoryFilterBar
            categories={PROJECT_CATEGORIES}
            activeCategory={selectedFilter}
            onSelectCategory={setSelectedFilter}
            variant="solid"
            className="w-full md:w-auto gap-1.5"
          />
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
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header Category & Language Badges */}
                <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border flex items-center gap-1 font-semibold ${getCategoryBadgeStyle(
                        project.category
                      )}`}
                    >
                      <FaTag size={9} />
                      {project.category}
                    </span>

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
                  {project.skills.slice(0, 6).map((skill) => (
                    <span
                      key={`${project.id}-${skill}`}
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
                    {project.updatedAt
                      ? `Atualizado: ${project.updatedAt}`
                      : "Repositório Git"}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-16 glass-card rounded-2xl border border-slate-800 space-y-3">
            <p className="text-slate-400 text-base">
              Nenhum projeto encontrado para o termo pesquisado.
            </p>
            <button
              type="button"
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
