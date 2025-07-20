import projects from "../data/projects.jsx";

const Projetos = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-600 px-4 py-12 text-gray-300">
      <div className="w-full max-w-6xl space-y-12">
        {projects.map((project, index) => (
          <div key={index}>
            <h2 className="mb-6 text-center text-2xl font-bold text-white">
              {project.title}
            </h2>

            {project.items.length === 0 ? (
              <p className="text-center text-sm text-gray-400">
                Nenhum projeto nesta categoria ainda.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                {project.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center rounded-lg bg-gray-700 p-6 text-center shadow-md transition-shadow duration-300 hover:shadow-lg"
                  >
                    {item.icon}
                    <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>
                    <p className="mt-2 text-sm">{item.description}</p>

                    {/* Skills */}
                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                      {item.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-gray-500 px-3 py-1 text-xs font-medium text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-4 flex gap-2">
                      {item.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded bg-blue-600 px-3 py-1 text-sm font-medium text-white hover:bg-blue-700"
                        >
                          GitHub
                        </a>
                      )}
                      {item.deploy && (
                        <a
                          href={item.deploy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded bg-green-600 px-3 py-1 text-sm font-medium text-white hover:bg-green-700"
                        >
                          Deploy
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
