export const PROJECT_METADATA_OVERRIDES = Object.freeze({
  cv_nitro: Object.freeze({
    displayName: "CV Nitro ATS & Multi-Agent AI",
    category: "IA & Ciência de Dados",
    isFeatured: true,
    priority: 1,
    deployUrl: "https://cvnitro-xzvgi43qkmsbovbt87h9bz.streamlit.app/",
    description:
      "Plataforma inteligente multi-agente para otimização de currículos e diagnóstico de compatibilidade ATS utilizando Gemini API, LangGraph, Python, Streamlit e Supabase.",
    skills: ["Python", "LangGraph", "Gemini API", "Multi-Agent", "Streamlit", "Supabase", "ATS"],
  }),
  "mailer-fullcyle": Object.freeze({
    displayName: "Mailer Microservice Full Cycle",
    category: "Backend & Microsserviços",
    isFeatured: true,
    priority: 2,
    description:
      "Microsserviço corporativo de alta vazão para processamento e envio assíncrono de e-mails com filas BullMQ, Fastify, Redis, TypeORM, observabilidade com Grafana/Prometheus e esteira de CI/CD.",
    skills: ["TypeScript", "Fastify", "BullMQ", "Redis", "TypeORM", "Grafana", "Prometheus", "Docker", "CI/CD"],
  }),
  microservicessales: Object.freeze({
    displayName: "Sales Microservices Monorepo",
    category: "Backend & Microsserviços",
    isFeatured: true,
    priority: 3,
    description:
      "Arquitetura distribuída de microsserviços de vendas em NestJS e TypeScript, gerenciada em monorepo com Turborepo, pnpm workspaces, Docker e princípios estritos de Clean Architecture.",
    skills: ["NestJS", "TypeScript", "Microservices", "Docker", "Turborepo", "Clean Architecture", "pnpm"],
  }),
  "base-system-nestjs-react": Object.freeze({
    displayName: "Base System Full Stack Architecture",
    category: "Full Stack",
    isFeatured: true,
    priority: 4,
    description:
      "Plataforma Full Stack escalável desenvolvida em Clean Architecture, unindo backend modular em NestJS com frontend reativo de alta performance em React 19, Vite, SWC e TypeScript.",
    skills: ["React", "NestJS", "TypeScript", "Vite", "Clean Architecture", "SWC", "Docker"],
  }),
  "openjob-api-golang": Object.freeze({
    displayName: "OpenJob API Golang",
    category: "Backend & Microsserviços",
    isFeatured: true,
    priority: 5,
    description:
      "API RESTful de alto rendimento para gerenciamento de vagas de emprego desenvolvida em Go, utilizando Gin Gonic, GORM e banco relacional SQLite containerizado com Docker.",
    skills: ["Go", "Gin Gonic", "GORM", "SQLite", "Docker", "REST API", "Clean Code"],
  }),
  esp32webserver: Object.freeze({
    displayName: "ESP32 Web Server IoT",
    category: "Sistemas Embarcados & IoT",
    isFeatured: true,
    priority: 6,
    description:
      "Aplicação de automação e engenharia de sistemas embarcados com Web Server interno em microcontrolador ESP32 para controle de atuadores e telemetria Wi-Fi em tempo real.",
    skills: ["ESP32", "C / C++", "HTML5", "CSS3", "JavaScript", "IoT", "WebSockets", "Hardware"],
  }),
  cardapio: Object.freeze({
    displayName: "Cardápio Digital Delivery",
    category: "Frontend & Mobile",
    isFeatured: true,
    priority: 7,
    deployUrl: "https://cardapio-flax.vercel.app/",
    description:
      "Aplicação web comercial de cardápio digital para hamburgueria com cálculo dinâmico de carrinho, seleção de complementos e checkout instantâneo integrado à API do WhatsApp.",
    skills: ["HTML5", "Tailwind CSS", "JavaScript", "E-Commerce", "WhatsApp API", "UX / UI"],
  }),
  "heartdisease-predict-ia": Object.freeze({
    displayName: "Previsão de Doenças Cardíacas",
    category: "IA & Ciência de Dados",
    isFeatured: true,
    priority: 8,
    deployUrl:
      "https://github.com/thiagoeu/HeartDisease-Predict-IA/blob/main/Previs%C3%A3o_Doen%C3%A7as_projetoIA_v3.ipynb",
    description:
      "Pipeline de Machine Learning para análise preditiva e diagnóstico precoce de cardiopatias a partir de dados clínicos, com validação cruzada, análise exploratória (EDA) e Scikit-Learn.",
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Seaborn", "Machine Learning", "Healthcare"],
  }),
  "emailvalidation-api-nodejs": Object.freeze({
    displayName: "API Envio & Validação de E-mails",
    category: "Backend & Microsserviços",
    isFeatured: true,
    priority: 9,
    deployUrl: "https://emailvalidation-api-nodejs.onrender.com/api-docs",
    description:
      "API RESTful para validação de e-mails com autenticação em dois fatores (OTP), Nodemailer, documentação interativa Swagger e MongoDB em Docker.",
    skills: ["Node.js", "Express", "Swagger", "MongoDB", "Docker", "Nodemailer", "JWT"],
  }),
  portifoliov1: Object.freeze({
    displayName: "Portfólio Dev Full Stack",
    category: "Frontend & Mobile",
    isFeatured: true,
    priority: 10,
    deployUrl: "https://portifoliov1.vercel.app/",
    description:
      "Portfólio interativo de Engenharia de Software desenvolvido com React 19, Vite, Tailwind CSS v4, sincronização assíncrona com GitHub API e efeitos em Canvas.",
    skills: ["React", "Tailwind CSS", "Vite", "GitHub API", "Clean Architecture", "UI/UX"],
  }),
  "repo-context": Object.freeze({
    displayName: "RepoContext AI Packager",
    category: "IA & Ciência de Dados",
    priority: 11,
    description:
      "Ferramenta de engenharia para empacotamento, filtragem e compressão de contexto de repositórios de código para consumo otimizado por LLMs.",
    skills: ["Next.js", "TypeScript", "LLM", "Prompt Engineering", "Developer Tools"],
  }),
  "node-ai": Object.freeze({
    displayName: "Node AI Agents & Ollama",
    category: "IA & Ciência de Dados",
    priority: 12,
    description:
      "Laboratório de engenharia para orquestração de LLMs locais em Node.js com Ollama, chamadas de ferramentas e agentes autônomos em TypeScript.",
    skills: ["TypeScript", "Node.js", "Ollama", "GenAI", "LLM", "Prompt Engineering"],
  }),
  "react-native-decibelimetro": Object.freeze({
    displayName: "Decibelímetro Mobile Expo",
    category: "Frontend & Mobile",
    priority: 13,
    description:
      "Aplicativo móvel desenvolvido em React Native e Expo para medição e monitoramento dos níveis de pressão sonora em decibéis (dB) em tempo real via microfone.",
    skills: ["React Native", "Expo", "JavaScript", "Mobile", "Audio API"],
  }),
  "mqtt-sv-nodejs": Object.freeze({
    displayName: "Broker MQTT & IoT Server",
    category: "Sistemas Embarcados & IoT",
    priority: 14,
    description:
      "Servidor de mensageria e telemetria para Internet das Coisas (IoT) com protocolo MQTT (Aedes Broker), WebSockets e Node.js para comunicação M2M.",
    skills: ["Node.js", "MQTT", "Aedes", "WebSockets", "IoT", "M2M"],
  }),
  "farmacia-popular": Object.freeze({
    displayName: "Farmácia Popular API NestJS",
    category: "Backend & Microsserviços",
    priority: 15,
    description:
      "API para controle e gestão farmacêutica em NestJS com autenticação JWT, banco relacional PostgreSQL e ambiente containerizado com Docker.",
    skills: ["NestJS", "TypeScript", "PostgreSQL", "Docker", "JWT", "REST API"],
  }),
  "mineracao-dados": Object.freeze({
    displayName: "Mineração de Dados & ML",
    category: "IA & Ciência de Dados",
    priority: 16,
    description:
      "Análise exploratória de dados (EDA), mineração estatística e treinamento de modelos preditivos com Python, Pandas, NumPy e Scikit-Learn.",
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Data Mining", "Jupyter"],
  }),
  "recomendacaomusicas-python-ia": Object.freeze({
    displayName: "Sistema de Recomendação Musical",
    category: "IA & Ciência de Dados",
    priority: 17,
    description:
      "Algoritmo de recomendação musical baseado em filtragem de conteúdo e métricas de similaridade de cosseno (KNN) em Python.",
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "KNN", "Cosine Similarity"],
  }),
  "loja-nodejs-mongodb": Object.freeze({
    displayName: "E-Commerce Node.js & MongoDB",
    category: "Backend & Microsserviços",
    priority: 18,
    description:
      "API RESTful de e-commerce completa em Node.js e MongoDB com modelagem de produtos, gestão de carrinho e rotas de checkout.",
    skills: ["Node.js", "Express", "MongoDB", "REST API", "E-Commerce"],
  }),
  thiagoeu: Object.freeze({
    hidden: true,
  }),
});
