import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoPython } from "react-icons/io5";

const projects = [
  {
    title: "Backend",
    items: [
      {
        icon: <IoLogoJavascript size={40} />,
        name: "API Envio de E-mails",
        skills: [
          "Node.js",
          "Nodemailer",
          "Swagger",
          "express",
          "Swagger",
          "MongoDB",
        ],
        description:
          "API RESTful para envio de e-mails com Node.js e Nodemailer",
        github: "https://github.com/thiagoeu/emailValidation-API-Nodejs",
        deploy: "https://emailvalidation-api-nodejs.onrender.com/api-docs/#/",
      },
    ],
  },
  {
    title: "Frontend",
    items: [],
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
    ],
  },
];

export default projects;
