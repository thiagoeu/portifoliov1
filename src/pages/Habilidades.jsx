import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import {
  FaDocker,
  FaGitAlt,
  FaPython,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiSwagger, SiMongoose, SiSequelize, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const categorizedSkills = [
  {
    title: "Linguagens de Programação",
    items: [
      {
        icon: <IoLogoJavascript size={40} />,
        name: "JavaScript",
        description:
          "Linguagem base do ecossistema web; usada tanto no frontend quanto no backend (Node.js).",
      },
      {
        icon: <FaPython size={40} />,
        name: "Python",
        description:
          "Criação de APIs e análise de dados com bibliotecas como Pandas, NumPy, Sklearn e Seaborn.",
      },
      {
        icon: <FaGolang size={40} />,
        name: "Go",
        description:
          "Desenvolvimento de APIs RESTful escaláveis, com excelente desempenho e concorrência nativa.",
      },
    ],
  },
  {
    title: "Frontend",
    items: [
      {
        icon: <FaReact size={40} />,
        name: "React",
        description:
          "Biblioteca JavaScript para criação de interfaces de usuário reativas e componentes reutilizáveis.",
      },
      {
        icon: <RiTailwindCssFill size={40} />,
        name: "Tailwind CSS",
        description:
          "Framework utilitário para estilização rápida e responsiva com classes utilitárias.",
      },
      {
        icon: <FaCss3Alt size={40} />,
        name: "CSS",
        description:
          "Linguagem de estilos usada para definir o layout visual e responsividade de páginas web.",
      },
      {
        icon: <FaHtml5 size={40} />,
        name: "HTML",
        description:
          "Linguagem de marcação para estruturação de páginas e aplicações web.",
      },
    ],
  },
  {
    title: "Backend e Banco de Dados",
    items: [
      {
        icon: <FaNodeJs size={40} />,
        name: "Node.js",
        description:
          "Execução de código JavaScript no servidor; ideal para APIs rápidas e escaláveis.",
      },
      {
        icon: <SiExpress size={40} />,
        name: "Express",
        description:
          "Framework minimalista para Node.js, utilizado na criação de APIs com rotas e middlewares.",
      },
      {
        icon: <BiLogoPostgresql size={40} />,
        name: "PostgreSQL",
        description:
          "Banco de dados relacional robusto, com suporte avançado a queries SQL e dados complexos.",
      },
      {
        icon: <BiLogoMongodb size={40} />,
        name: "MongoDB",
        description:
          "Banco de dados NoSQL orientado a documentos; ótimo para dados flexíveis e em tempo real.",
      },
    ],
  },
  {
    title: "ORMs e Modelagem de Dados",
    items: [
      {
        icon: <SiSequelize size={40} />,
        name: "Sequelize",
        description:
          "ORM para Node.js com suporte ao PostgreSQL, permitindo modelagem e manipulação de dados de forma abstrata.",
      },
      {
        icon: <SiMongoose size={40} />,
        name: "Mongoose",
        description:
          "ODM para MongoDB que facilita a modelagem de dados e validações em aplicações Node.js.",
      },
    ],
  },
  {
    title: "DevOps e Ferramentas",
    items: [
      {
        icon: <FaDocker size={40} />,
        name: "Docker",
        description:
          "Containerização de aplicações para garantir portabilidade e consistência entre ambientes.",
      },
      {
        icon: <FaGitAlt size={40} />,
        name: "Git",
        description:
          "Sistema de controle de versão distribuído, essencial para colaboração em projetos de software.",
      },
      {
        icon: <SiSwagger size={40} />,
        name: "Swagger",
        description:
          "Documentação interativa de APIs REST; facilita testes e entendimento por parte de devs e clientes.",
      },
    ],
  },
];

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
