export const PROFILE = Object.freeze({
  name: "Thiago Araujo",
  shortRole: "Desenvolvedor Full Stack",
  badgeTitle: "Desenvolvedor Full Stack",
  footerBio:
    "Engenharia da Computação | Desenvolvedor Full Stack especializado em Node.js, React, Go, Python e Cloud.",
  githubUsername: "thiagoeu",
  email: "araujo.thiago1051@gmail.com",
  phoneDisplay: "+55 (83) 99648-5508",
  phoneRaw: "+5583996485508",
  whatsappNumber: "5583996485508",
  urls: Object.freeze({
    github: "https://github.com/thiagoeu",
    whatsapp: "https://wa.me/5583996485508",
    linkedin: "https://www.linkedin.com/in/thiago-ara%C3%BAjo-946183227",
    cv: "https://drive.google.com/file/d/1rL_BwkCHBXHYMH-bR-eE-aczHoJ0yk1z/view?usp=sharing",
  }),
  roles: Object.freeze([
    "Desenvolvedor Full Stack",
    "Engenheiro da Computação",
    "Especialista Node.js & React",
    "Desenvolvedor Go & Python",
    "Criador de Soluções IoT",
  ]),
  metrics: Object.freeze([
    { value: "IA & Agentes", label: "LLMs & Dados", colorClass: "text-blue-400" },
    { value: "Full Stack", label: "End-to-End", colorClass: "text-white" },
    { value: "API + IoT", label: "Sistemas", colorClass: "text-blue-400" },
  ]),
});

export const NAV_LINKS = Object.freeze([
  { name: "Home", path: "/" },
  { name: "Habilidades", path: "/skills" },
  { name: "Projetos", path: "/projects" },
  { name: "Contato", path: "/contact" },
]);

export const PROJECT_CATEGORIES = Object.freeze([
  "Todos",
  "Destaques",
  "Full Stack",
  "Backend & Microsserviços",
  "Frontend & Mobile",
  "IA & Ciência de Dados",
  "Sistemas Embarcados & IoT",
]);
