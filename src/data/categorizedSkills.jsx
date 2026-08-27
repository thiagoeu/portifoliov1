import {
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaLinux,
  FaCubes,
  FaCode,
  FaCheckDouble,
} from "react-icons/fa";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGolang } from "react-icons/fa6";
import {
  SiSwagger,
  SiMongoose,
  SiSequelize,
  SiExpress,
  SiTypescript,
  SiCplusplus,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiRedis,
  SiPostman,
  SiRabbitmq,
  SiPrisma,
  SiTypeorm,
  SiFlask,
  SiDjango,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const categorizedSkills = [
  {
    title: "Linguagens de Programação",
    items: [
      {
        icon: <IoLogoJavascript size={36} />,
        name: "JavaScript",
        description: "Linguagem base do ecossistema web; usada tanto no frontend quanto no backend (Node.js).",
      },
      {
        icon: <SiTypescript size={36} />,
        name: "TypeScript",
        description: "Tipagem estática sobre o JavaScript, aumentando a confiabilidade e escalabilidade do código.",
      },
      {
        icon: <FaPython size={36} />,
        name: "Python",
        description: "Criação de APIs, automação e análise de dados com Pandas, NumPy, Sklearn e Seaborn.",
      },
      {
        icon: <FaGolang size={36} />,
        name: "Go",
        description: "Desenvolvimento de APIs RESTful escaláveis com alta performance e concorrência nativa.",
      },
      {
        icon: <SiCplusplus size={36} />,
        name: "C / C++",
        description: "Programação de baixo nível para microcontroladores (ESP32, Arduino) e sistemas embarcados.",
      },
    ],
  },
  {
    title: "Arquitetura & Boas Práticas",
    items: [
      {
        icon: <FaCheckDouble size={36} />,
        name: "Clean Code",
        description: "Escrita de código limpo, legível, autoexplicativo, altamente testável e de fácil manutenção.",
      },
      {
        icon: <FaCubes size={36} />,
        name: "Princípios SOLID",
        description: "Design orientado a objetos (SRP, OCP, LSP, ISP, DIP) focado em código desacoplado e escalável.",
      },
      {
        icon: <FaCode size={36} />,
        name: "Design Patterns",
        description: "Aplicação de padrões de projeto criacionais, estruturais e comportamentais (Factory, Singleton, Observer, Strategy, Repository).",
      },
    ],
  },
  {
    title: "Frontend",
    items: [
      {
        icon: <FaReact size={36} />,
        name: "React",
        description: "Biblioteca JavaScript para criação de interfaces de usuário reativas e componentes reutilizáveis.",
      },
      {
        icon: <RiTailwindCssFill size={36} />,
        name: "Tailwind CSS",
        description: "Framework utilitário para estilização rápida, moderna e responsiva.",
      },
      {
        icon: <FaCss3Alt size={36} />,
        name: "CSS3",
        description: "Estilização avançada, animações, layouts flexíveis e responsividade.",
      },
      {
        icon: <FaHtml5 size={36} />,
        name: "HTML5",
        description: "Estruturação semântica de páginas e aplicações web modernas.",
      },
    ],
  },
  {
    title: "Backend & Frameworks",
    items: [
      {
        icon: <FaNodeJs size={36} />,
        name: "Node.js",
        description: "Execução de JavaScript no servidor; ideal para APIs rápidas, escaláveis e em tempo real.",
      },
      {
        icon: <SiExpress size={36} />,
        name: "Express",
        description: "Framework minimalista para Node.js, utilizado na criação de arquiteturas RESTful.",
      },
      {
        icon: <SiDjango size={36} />,
        name: "Django",
        description: "Framework web robusto em Python para desenvolvimento ágil de aplicações e APIs.",
      },
      {
        icon: <SiFlask size={36} />,
        name: "Flask",
        description: "Micro-framework minimalista em Python ideal para microsserviços e APIs leves.",
      },
      {
        icon: <BiLogoPostgresql size={36} />,
        name: "PostgreSQL",
        description: "Banco de dados relacional robusto com suporte a queries SQL complexas e integridade.",
      },
      {
        icon: <BiLogoMongodb size={36} />,
        name: "MongoDB",
        description: "Banco de dados NoSQL orientado a documentos para dados flexíveis e escalabilidade.",
      },
      {
        icon: <SiRedis size={36} />,
        name: "Redis",
        description: "Banco de dados em memória utilizado para cache de alta velocidade e gerenciamento de sessões.",
      },
    ],
  },
  {
    title: "Mensageria & Arquitetura",
    items: [
      {
        icon: <SiRabbitmq size={36} />,
        name: "RabbitMQ",
        description: "Message broker orientado a filas de mensagens para desacoplamento de microsserviços e tarefas assíncronas.",
      },
    ],
  },
  {
    title: "ORMs e Modelagem de Dados",
    items: [
      {
        icon: <SiPrisma size={36} />,
        name: "Prisma ORM",
        description: "ORM moderno e auto-gerado para Node.js/TypeScript com excelente suporte a bancos relacionais.",
      },
      {
        icon: <SiTypeorm size={36} />,
        name: "TypeORM",
        description: "ORM baseado em Data Mapper e Active Record para TypeScript e JavaScript.",
      },
      {
        icon: <SiSequelize size={36} />,
        name: "Sequelize",
        description: "ORM para Node.js com suporte ao PostgreSQL, MySQL e modelagem relacional.",
      },
      {
        icon: <SiMongoose size={36} />,
        name: "Mongoose",
        description: "ODM para MongoDB facilitando schemas, validações e middleware de dados.",
      },
    ],
  },
  {
    title: "Engenharia de Dados, IA & IoT",
    items: [
      {
        icon: <SiPandas size={36} />,
        name: "Pandas & NumPy",
        description: "Manipulação, limpeza, análise vetorial e tratamento de conjuntos de dados em Python.",
      },
      {
        icon: <SiScikitlearn size={36} />,
        name: "Scikit-Learn",
        description: "Modelos de Machine Learning, classificação, regressão e recomendação estatística.",
      },
      {
        icon: <SiCplusplus size={36} />,
        name: "Sistemas Embarcados & ESP32",
        description: "Desenvolvimento de firmware, comunicação Wi-Fi/Bluetooth e Web Server em microcontroladores.",
      },
    ],
  },
  {
    title: "DevOps, Ferramentas & Cloud",
    items: [
      {
        icon: <FaDocker size={36} />,
        name: "Docker",
        description: "Containerização de aplicações garantindo padronização e portabilidade do ambiente.",
      },
      {
        icon: <FaGitAlt size={36} />,
        name: "Git & GitHub",
        description: "Controle de versão distribuído, fluxo de branches e integração contínua (CI/CD).",
      },
      {
        icon: <FaLinux size={36} />,
        name: "Linux & Shell",
        description: "Administração de servidores Linux, scripts bash e gerenciamento de processos.",
      },
      {
        icon: <SiSwagger size={36} />,
        name: "Swagger / OpenAPI",
        description: "Documentação padronizada e interativa de APIs RESTful.",
      },
      {
        icon: <SiPostman size={36} />,
        name: "Postman",
        description: "Automação de testes, simulação de chamadas HTTP e validação de rotas de API.",
      },
    ],
  },
];

export default categorizedSkills;
