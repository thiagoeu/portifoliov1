# 🚀 Portfólio Personalizado - Thiago Araujo

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GitHub API](https://img.shields.io/badge/GitHub_API-Live-181717?style=for-the-badge&logo=github&logoColor=white)

Portfólio moderno, responsivo e de alta performance desenvolvido em **React 19** e **Tailwind CSS v4**. Apresenta uma estética cibernética *Neon Dark Mode* com **integração em tempo real com a API do GitHub**, componente interativo em Canvas e categorização dinâmica de projetos.

---

## 🌟 Principais Recursos

- ⚡ **Sincronização em Tempo Real com GitHub**: Consumo dos repositórios públicos via API (`@thiagoeu`), exibindo métricas ao vivo de estrelas, linguagens principais, tópicos e links de preview.
- 📖 **Extrator Automático de README**: Leitura inteligente do primeiro parágrafo do `README.md` de cada repositório no GitHub para descrições sempre atualizadas.
- 🕹️ **Avatar Interativo (HD & Retro 8-Bit)**: Moldura redonda nítida em alta definição com anel cibernético pulsante e alternância para efeito 8-bit com linhas de varredura CRT.
- 🌌 **Partículas Cibernéticas em Canvas**: Plano de fundo animado interativo em Canvas com grade cibernética sutil.
- 📊 **Filtros e Busca por Categorias**: Organização dos projetos em **Full Stack**, **Backend**, **Frontend** e **Análise de Dados & IA**.
- 💬 **Contato Rápido & WhatsApp Direct**: Gerador de mensagens instantâneas via WhatsApp e botões de cópia rápida para E-mail e Telefone.

---

## 🛠️ Tecnologias Utilizadas

### Frontend & UI
- **React 19** & **Vite 6**
- **Tailwind CSS v4** (Glassmorphism & Neon Glow)
- **React Router DOM v7** (Navegação SPA)
- **React Icons** & **Google Fonts** (*Outfit*, *Press Start 2P*, *JetBrains Mono*)

### Integrações & APIs
- **GitHub REST API** (Leitura de perfis, repositórios e arquivos README)
- **HTML5 Canvas API** (Gráficos em tempo real)

---

## 📁 Estrutura do Projeto

```text
portifoliov1/
├── src/
│   ├── assets/              # Imagens e mídias do projeto
│   ├── components/          # Componentes reutilizáveis (Header, Footer, PixelAvatar, PixelBackground)
│   ├── data/                # Dados locais (categorizedSkills.jsx, projects.jsx)
│   ├── hooks/               # Custom Hook useGithubRepos (API do GitHub + README Extractor)
│   ├── pages/               # Páginas principais (Hero, Habilidades, Projetos, Contato)
│   ├── App.jsx              # Configuração de rotas e layout raiz
│   ├── index.css            # Importações Tailwind v4 e utilitários CSS
│   └── main.jsx             # Ponto de entrada da aplicação
├── index.html               # Documento principal com metadados SEO
└── package.json             # Dependências e scripts
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/thiagoeu/portifoliov1.git
   cd portifoliov1
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a aplicação no navegador em: `http://localhost:5173`

4. **Gerar a build de produção:**
   ```bash
   npm run build
   ```

---

## 📄 Licença & Autor

Desenvolvido por **Thiago Araujo** — *Engenheiro da Computação & Desenvolvedor Full Stack*.

- 🌐 **GitHub**: [@thiagoeu](https://github.com/thiagoeu)
- 💼 **LinkedIn**: [thiagoeu](https://github.com/thiagoeu)
- 📧 **E-mail**: araujo.thiago1051@gmail.com
