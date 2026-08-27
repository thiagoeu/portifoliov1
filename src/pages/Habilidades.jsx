import { useState } from "react";
import categorizedSkills from "../data/categorizedSkills.jsx";
import { FaCode, FaLayerGroup, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const Habilidades = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = ["Todos", ...categorizedSkills.map((c) => c.title)];

  const filteredCategories =
    activeCategory === "Todos"
      ? categorizedSkills
      : categorizedSkills.filter((c) => c.title === activeCategory);

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full py-16 px-6">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Header Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-950/60 px-4 py-1.5 text-xs font-mono text-cyan-400 border border-cyan-500/30">
            <FaCode size={14} />
            <span>Tech Stack & Competências</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Habilidades &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tecnologias
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Conjunto de linguagens, frameworks, bancos de dados e ferramentas que utilizo no meu fluxo de desenvolvimento de software.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 scale-105"
                  : "glass-card text-slate-400 hover:text-white hover:bg-slate-800/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories & Skills Display */}
        <div className="space-y-12">
          {filteredCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
                <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                <h2 className="text-xl font-bold text-white tracking-wide">
                  {category.title}
                </h2>
                <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                  {category.items.length} itens
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((skill, idx) => (
                  <div
                    key={idx}
                    className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Top Glow bar on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div>
                      {/* Skill Icon & Name */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-slate-900/90 text-cyan-400 border border-slate-800 group-hover:border-cyan-500/40 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300 shadow-md">
                          {skill.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h3>
                          <span className="text-[11px] font-mono text-purple-400">
                            Prática & Produção
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
