import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoPython } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io";
import { IoTerminalSharp } from "react-icons/io5";

const projects = [
  {
    title: "Backend",
    items: [
      {
        icon: <IoLogoNodejs size={40} />,
        name: "API Envio de E-mails",
        skills: [
          "Node.js",
          "Nodemailer",
          "Swagger",
          "express",
          "Swagger",
          "MongoDB",
          "Docker",
        ],
        description:
          "API RESTful para envio de e-mails com Node.js e Nodemailer",
        github: "https://github.com/thiagoeu/emailValidation-API-Nodejs",
        deploy: "https://emailvalidation-api-nodejs.onrender.com/api-docs/#/",
      },
      {
        icon: <IoTerminalSharp size={40} />,
        name: "ESP32 Web Server",
        skills: ["ESP32", "C", "html", "css", "javascript"],
        description:
          "Web Server utilizando microcontrolador ESP32, com pagina web para controle de dispositivos IoT",
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
        skills: ["html", "tailwind", "javascript"],
        description:
          "Projeto de hamburgueria online com HTML, Tailwind e JavaScript, integração com whatsapp para fazer pedido.",
        github: "https://github.com/thiagoeu/cardapio",
        deploy: "https://cardapio-flax.vercel.app/",
      },
      {
        icon: <IoLogoReact size={40} />,
        name: "Portifolio",
        skills: ["html", "tailwind", "javascript", "react"],
        description:
          "Meu Portifolio com React, desenvolvido para apresentar minhas habilidades e projetos pessoais.",
        github: "https://github.com/thiagoeu/cardapio",
        deploy: "https://cardapio-flax.vercel.app/",
      },
    ],
  },
  {
    title: "Analise de dados e IA",
    items: [
      {
        icon: <IoLogoPython size={40} />,
        name: "Previsão de Doenças Cardiacas",
        skills: ["Python", "Pandas", "Numpy", "Sklearn", "Seaborn", "IA"],
        description:
          "Analise e tratamento de dados + IA para previsão de doencas cardiacas, baseado em datasets publicos",
        github: "https://github.com/thiagoeu/HeartDisease-Predict-IA",
        deploy:
          "https://github.com/thiagoeu/HeartDisease-Predict-IA/blob/main/Previs%C3%A3o_Doen%C3%A7as_projetoIA_v3.ipynb",
      },
      {
        icon: <IoLogoPython size={40} />,
        name: "Recomendações de Musicas",
        skills: [
          "Python",
          "Pandas",
          "Numpy",
          "Sklearn",
          "KNN",
          "IA",
          "Cosine Similarity",
        ],
        description:
          "Sistema de recomendação musical que usa aprendizado de máquina para sugerir músicas de acordo com o gosto do usuário.",
        github: "https://github.com/thiagoeu/HeartDisease-Predict-IA",
        deploy:
          "https://github.com/thiagoeu/HeartDisease-Predict-IA/blob/main/Previs%C3%A3o_Doen%C3%A7as_projetoIA_v3.ipynb",
      },
    ],
  },
];

export default projects;
