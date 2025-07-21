import categorizedSkills from "../data/categorizedSkills.jsx"; // Importa as habilidades categorizadas

const Habilidades = () => {
  return (
    // Seção principal da página de habilidades, com padding, fundo e alinhamento central
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-600 px-4 py-12 text-gray-300">
      {/* Container com largura máxima e espaçamento vertical entre categorias */}
      <div className="w-full max-w-6xl space-y-12">
        {/* Itera sobre cada categoria de habilidades */}
        {categorizedSkills.map((category, index) => (
          <div key={index}>
            {/* Título da categoria */}
            <h2 className="mb-6 text-center text-2xl font-bold text-white">
              {category.title}
            </h2>

            {/* Grid responsiva para os cards de habilidades */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              {/* Itera sobre cada habilidade da categoria */}
              {category.items.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center rounded-lg bg-gray-700 p-4 text-center shadow-md transition-shadow duration-300 hover:shadow-lg"
                >
                  {/* Ícone da habilidade */}
                  {skill.icon}

                  {/* Nome da habilidade */}
                  <span className="mt-2 text-lg font-semibold">
                    {skill.name}
                  </span>

                  {/* Descrição da habilidade */}
                  <span className="mt-2 text-sm">{skill.description}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
