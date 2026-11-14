import { useState, useMemo } from "react";
import categorizedSkills from "../data/categorizedSkills.jsx";
import { FaCode } from "react-icons/fa";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import CategoryFilterBar from "../components/ui/CategoryFilterBar.jsx";
import { useDocumentHead } from "../hooks/useDocumentHead";

const Habilidades = () => {
  useDocumentHead({
    title: "Habilidades Técnicas",
    description:
      "Conheça a stack tecnológica de Thiago Araujo: React, Node.js, NestJS, Go, Python, Docker, PostgreSQL, MongoDB e C++ para sistemas embarcados.",
  });

  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = useMemo(
    () => ["Todos", ...categorizedSkills.map((c) => c.title)],
    []
  );

  const filteredCategories = useMemo(
    () =>
      activeCategory === "Todos"
        ? categorizedSkills
        : categorizedSkills.filter((c) => c.title === activeCategory),
    [activeCategory]
  );

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full py-16 px-6">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeader
          badgeIcon={FaCode}
          badgeText="Tech Stack & Competências"
          titlePrefix="Habilidades &"
          titleHighlight="Tecnologias"
          description="Conjunto de linguagens, frameworks, bancos de dados e ferramentas que utilizo no meu fluxo de desenvolvimento de software."
        />

        {/* Category Filters */}
        <CategoryFilterBar
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          variant="glass"
          className="justify-center max-w-4xl mx-auto"
        />

        {/* Categories & Skills Display */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.title} className="space-y-6">
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
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Top Glow bar on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

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
                          <span className="text-[11px] font-mono text-emerald-400">
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
