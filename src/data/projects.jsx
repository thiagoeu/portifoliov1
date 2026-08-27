import { IoLogoJavascript, IoLogoPython, IoLogoReact, IoLogoNodejs, IoTerminalSharp } from "react-icons/io5";
import { FaLayerGroup } from "react-icons/fa";

const projects = [
  {
    title: "Full Stack",
    items: [
      {
        icon: <FaLayerGroup size={36} />,
        name: "ESP32 Web Server IoT",
        skills: ["ESP32", "C / C++", "HTML5", "CSS3", "JavaScript", "IoT", "Full Stack"],
        description:
          "Aplicação Full Stack embarcada com Web Server embutido no microcontrolador ESP32 para automação residencial e controle IoT via interface web responsiva em tempo real.",
        github: "https://github.com/thiagoeu/ESP32-Web-Server",
        deploy: null,
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        icon: <IoLogoNodejs size={40} />,
        name: "API Envio de E-mails",
        skills: ["Node.js", "Nodemailer", "Express", "Swagger", "MongoDB", "Docker", "Backend"],
        description:
          "API RESTful escalável para validação e envio automatizado de e-mails transacionais utilizando Node.js, Nodemailer, documentação interativa com Swagger e banco MongoDB containerizado em Docker.",
        github: "https://github.com/thiagoeu/emailValidation-API-Nodejs",
        deploy: "https://emailvalidation-api-nodejs.onrender.com/api-docs/#/",
      },
    ],
  },
  {
    title: "Frontend",
    items: [
      {
        icon: <IoLogoJavascript size={40} />,
        name: "Hamburgueria Online",
        skills: ["HTML5", "Tailwind CSS", "JavaScript", "Frontend"],
        description:
          "Aplicação web de cardápio digital e gestão de pedidos online para hamburgueria, com cálculo automático de carrinho e envio instantâneo do pedido formatado via WhatsApp.",
        github: "https://github.com/thiagoeu/cardapio",
        deploy: "https://cardapio-flax.vercel.app/",
      },
      {
        icon: <IoLogoReact size={40} />,
        name: "Portifólio Dev Full Stack",
        skills: ["React", "Tailwind CSS", "Vite", "GitHub API", "Canvas", "Full Stack"],
        description:
          "Portfólio interativo desenvolvido em React com sincronização automática de repositórios via GitHub API, avatar com efeitos retro pixel art em Canvas e tema cibernético.",
        github: "https://github.com/thiagoeu/portifoliov1",
        deploy: "https://portifoliov1.vercel.app/",
      },
    ],
  },
  {
    title: "Analise de dados e IA",
    items: [
      {
        icon: <IoLogoPython size={40} />,
        name: "Previsão de Doenças Cardíacas",
        skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Seaborn", "Machine Learning"],
        description:
          "Pipeline completo de análise exploratória, pré-processamento de dados clínicos e treinamento de modelos de Machine Learning para auxílio no diagnóstico precoce de cardiopatias.",
        github: "https://github.com/thiagoeu/HeartDisease-Predict-IA",
        deploy:
          "https://github.com/thiagoeu/HeartDisease-Predict-IA/blob/main/Previs%C3%A3o_Doen%C3%A7as_projetoIA_v3.ipynb",
      },
      {
        icon: <IoLogoPython size={40} />,
        name: "Sistema de Recomendação Musical",
        skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "KNN", "Cosine Similarity"],
        description:
          "Algoritmo de recomendação musical baseado em filtragem de conteúdo e métricas de similaridade de cosseno (KNN), sugerindo faixas personalizadas conforme o perfil acústico do usuário.",
        github: "https://github.com/thiagoeu/MusicRecommendation-IA",
        deploy: null,
      },
    ],
  },
];

export default projects;
