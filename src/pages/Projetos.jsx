import { FaGithub } from "react-icons/fa"; // Ícone do GitHub
import projects from "../data/projects.jsx"; // Importa os dados dos projetos

const Projetos = () => {
  return (
    // Seção principal da página de projetos, com estilização de fundo, padding e alinhamento
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-600 px-4 py-12 text-gray-300">
      {/* Container central com largura máxima */}
      <div className="w-full max-w-6xl space-y-12">
        {/* Itera sobre cada categoria de projetos */}
        {projects.map((project, index) => (
          <div key={index}>
            {/* Título da categoria */}
            <h2 className="mb-6 text-center text-2xl font-bold text-white">
              {project.title}
            </h2>

            {/* Caso não tenha projetos */}
            {project.items.length === 0 ? (
              <p className="text-center text-sm text-gray-400">
                Nenhum projeto nesta categoria ainda.
              </p>
            ) : (
              // Grid responsiva para os cards de projetos
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                {/* Itera sobre cada item da categoria */}
                {project.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center rounded-lg bg-gray-700 p-6 text-center shadow-md transition-shadow duration-300 hover:shadow-lg"
                  >
                    {/* Ícone do projeto */}
                    {item.icon}

                    {/* Nome do projeto */}
                    <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>

                    {/* Descrição */}
                    <p className="mt-2 text-sm">{item.description}</p>

                    {/* Skills do projeto */}
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

                    {/* Links de GitHub e Deploy */}
                    <div className="mt-4 flex gap-2">
                      {/* Link para o GitHub */}
                      {item.github && (
                        <div className="flex justify-center">
                          <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded bg-gray-900 px-3 py-1 text-sm font-medium text-white hover:bg-blue-700"
                          >
                            <FaGithub />
                            Github
                          </a>
                        </div>
                      )}

                      {/* Link para o Deploy */}
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
