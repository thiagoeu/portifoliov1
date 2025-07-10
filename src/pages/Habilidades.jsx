import categorizedSkills from "../data/categorizedSkills.jsx";

const Habilidades = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-600 px-4 py-12 text-gray-300">
      <div className="w-full max-w-6xl space-y-12">
        {categorizedSkills.map((category, index) => (
          <div key={index}>
            <h2 className="mb-6 text-center text-2xl font-bold text-white">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              {category.items.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center rounded-lg bg-gray-700 p-4 text-center shadow-md transition-shadow duration-300 hover:shadow-lg"
                >
                  {skill.icon}
                  <span className="mt-2 text-lg font-semibold">
                    {skill.name}
                  </span>
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
