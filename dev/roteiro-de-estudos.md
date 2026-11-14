# Caderno e Roteiro de Estudos

## Modulo: Design de Interfaces, Psicologia das Cores e UI/UX para Engenharia de Software

### 1. O Problema do Roxo Neon / Cyberpunk em Portfolios
Nos ultimos anos (2022-2025), o gradiente ciano para roxo e fuchsia tornou-se uma convencao saturada, impulsionada por ferramentas de IA generativa, marketing de web3 e modelos pre-prontos. 
Quando recrutadores tecnicos ou liderancas de engenharia visualizam esse padrao excessivo:
- Pode gerar percepcao de "template generico" ou gerado sem intencionalidade de produto.
- Provoca fadiga visual decorrente do alto contraste espectral entre comprimentos de onda de ciano e magenta.
- Distrai o foco do elemento central: arquitetura de software, codigo e resolucao de problemas reais.

---

### 2. Fundamentos e Estudos de Cores em Interfaces Digitais

#### A. A Regra 60-30-10 (Design de Composicao)
- **60% - Cor Dominante / Base Estrutural:** Tons neutros profundos (Slate/Zinc escuro como `#070b14` ou `#0f172a`). Reduz a luminancia geral da tela, poupando a visao e criando um ambiente de leitura estavel.
- **30% - Superficies Secundarias e Organizacao:** Cards em vidro fosco (`glassmorphism` sutil), divisores em cinza-escuro (`slate-800`), caixas de codigo com preenchimento neutro.
- **10% - Cor de Acento (Accent Color):** Reservada estritamente para conversao e foco: botoes de acao (CTA), tags de status de producao, links clicaveis e estados de foco.

#### B. A Psicologia das Cores Aplicada a Tecnologia (Satyendra Singh / Joe Hallock)
- **Azul Safira / Sky / Deep Navy:** Cor com maior indice de confianca global em tecnologia (57%+ de preferencia em software corporativo, seguranca e infraestrutura). Transmite solidez, precisao e clareza tecnica.
- **Verde Esmeralda / Menta (Emerald / Mint / Teal):** Universalmente associado no desenvolvimento de software ao status `200 OK`, deploy bem-sucedido, CI/CD verde e terminal saudavel. Traz ar contemporaneo e de vitalidade tecnica.
- **Slate / Ardosa Neutro:** Fornece o equilibrio visual perfeito, eliminando sombras coloridas exageradas que poluem a tela.

#### C. Acessibilidade e Contraste WCAG 2.1 (Web Content Accessibility Guidelines)
- **Nivel AA:** Exige contraste minimo de 4.5:1 para texto normal e 3:1 para texto em escala maior ou elementos de interface.
- Fundos slate escuros combinados com tipografia Slate-200 / Slate-300 e acentos Sky/Emerald garantem legibilidade confortavel em qualquer tela ou iluminacao ambiente, atendendo as metricas de acessibilidade tecnica.

---

### 3. A Nova Arquitetura de Cores do Portfolio: "Modern Tech Clean"
- **Background Principal:** `#070b14` (Slate Profundo Neutro).
- **Cards e Paineis:** `rgba(15, 23, 42, 0.7)` com bordas em `slate-800` e desfoque de 12px.
- **Gradiente de Destaque Primario:** `from-sky-500 to-emerald-600` (substituindo ciano-para-roxo).
- **Indicadores de Status e Tags:** `text-emerald-400` para formacao/producao e `text-sky-400` para especialidades full-stack.
- **Particulas de Fundo:** Azul Sky (`#38bdf8`) e Esmeralda (`#10b981`), proporcionando dinamismo sutil sem poluir a visualizacao.

---

## Modulo: CSS Moderno, PostCSS e Resolucao de Erros de Build

### 1. Entendendo o Erro `@import must precede all other statements`
Na especificacao oficial do CSS (W3C) e em compiladores modernos (PostCSS / Tailwind v4 / Vite):
- Regras `@import` de recursos externos (como fontes do Google Fonts) **devem** ser declaradas antes de qualquer outra regra de estilo, declaracao ou regra de @layer preenchida.
- No Tailwind CSS v4, a diretiva `@import "tailwindcss";` nao e uma folha externa comum, mas uma macro do compilador que injeta o reset e as definicoes de tema diretamente no arquivo compilado.
- Se colocamos `@import url(...)` **depois** de `@import "tailwindcss";`, o parser do PostCSS encontra estilos ja processados antes da instrucao `@import`, violando a especificacao da W3C e interrompendo o build com erro.

### 2. Solucao e Boas Praticas de Performance de Fontes na Web
Ao inves de importar fontes via `@import` no arquivo CSS:
1. **Adicionar preconnect no `<head>` do `index.html`:**
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link href="https://fonts.googleapis.com/css2?..." rel="stylesheet" />
   ```
2. **Vantagens de Engenharia:**
   - **Eliminacao de Bloqueio de Renderizacao:** O navegador inicia o handshake DNS e TLS com os servidores de fontes em paralelo antes mesmo de baixar o pacote de CSS principal.
   - **Melhoria no FCP (First Contentful Paint) e LCP (Largest Contentful Paint):** Reduz o layout shift (CLS) e o atraso no carregamento visual das tipografias.
   - **Conformidade Estrita com PostCSS:** O arquivo CSS fica restrito as regras de estilizacao, sem conflitos com o `@import` do Tailwind v4.

---

## Modulo: Descoberta de Skills, Workflows e Indexacao da IDE (.gitignore)

### 1. Por que pastas no `.gitignore` ocultam comandos (`/`) na IDE
- O mecanismo de descoberta de customizacoes de workspace do Antigravity (que escaneia `.agents/skills/` e `.agents/workflows/`) utiliza o indexador de arquivos do workspace.
- Por padrao, o indexador ignora qualquer diretorio listado no `.gitignore` (para nao escanear pastas pesadas como `node_modules` ou `dist`).
- Consequentemente, ao adicionar `.agents/` no `.gitignore`, a IDE deixa de indexar as skills locais e os comandos `/` desaparecem do menu do chat.

### 2. Instalacao Global de Skills (`~/.gemini/config/skills/`)
- Mover as skills para `C:\Users\<Usuario>\.gemini\config\skills\` permite que as capacidades permaneçam ativas globalmente na máquina para todos os projetos, permitindo manter o repositório Git sem poluição de pastas do agente no versionamento.

---

## Modulo: Clean Architecture, SOLID e Design Patterns em React

### 1. Camadas da Arquitetura Limpa no Frontend
Mesmo em aplicacoes SPA client-side, separar responsabilidades evita componentes inchados (God Components):
- **Domain (`src/domain/`):** Funcoes puras de regras de negocio (ex: categorizacao automatica de repositorios, merge entre projetos estaticos e remotos, filtragem). Nao depende de React nem de `fetch`.
- **Infrastructure / Services (`src/services/`):** Comunicacao externa (GitHub REST API), gerenciamento de `AbortController` e estrategia de cache (`sessionStorage` com TTL).
- **Constants / Config (`src/constants/`):** Single Source of Truth (Fonte Unica da Verdade) para dados estaticos compartilhados em multiplos componentes.
- **Presentation (`src/hooks/`, `src/components/`, `src/pages/`):** Componentes focados exclusivamente em estado visual, acessibilidade e composicao de UI.

### 2. Padroes de Projeto Aplicados
- **Repository / Service Pattern:** Isola a busca e o cache dos dados do GitHub em `githubService.js`, protegendo a aplicacao contra o limite de 60 requisicoes/hora da API publica do GitHub.
- **Custom Hook Pattern (`useTypewriter`, `useGithubRepos`):** Encapsula efeitos colaterais (`useEffect`, timers, cancelamento de requests) expondo uma interface declarativa limpa para os componentes.
- **Presentational & Composite Pattern (`SectionHeader`, `CategoryFilterBar`):** Extrai padroes visuais repetidos em multiplos arquivos para componentes reutilizaveis e acessiveis (`aria-pressed`, `aria-label`).

### 3. Boas Praticas de Ciclo de Vida, Performance e Seguranca Implementadas
- **Cancelamento de Requisicoes (`AbortController`):** Em `useGithubRepos.js`, se o usuario sair da pagina antes do `fetch` terminar, `controller.abort()` cancela as conexoes HTTP pendentes e evita atualizacao de estado em componente desmontado.
- **Cache em `sessionStorage` com TTL:** Em `githubService.js`, os dados consolidados do GitHub ficam salvos por 15 minutos na sessao do navegador, evitando o limite de 60 requisicoes/hora da API publica do GitHub e tornando a navegacao entre abas instantanea.
- **Limpeza Deterministica de Timers (`useTypewriter` e `useRef`):**
  - Substituicao de `setTimeout` aninhados por uma maquina de estados baseada em um unico timer por ciclo em `useTypewriter.js`.
  - Uso de `useRef` (`copyTimerRef`) em `Contato.jsx` para cancelar timeouts anteriores se o usuario clicar repetidamente em copiar ou desmontar a tela.
- **Eliminacao de Dead Assets no Bundle:** A remocao do import nao utilizado `contact.png` em `Contato.jsx` reduziu em ~847 KB o tamanho final da pasta `dist/assets` gerada pelo Vite.
- **Chaves Estaveis (`key`) e Memorizacao (`useMemo`):**
  - Substituicao de `key={index}` por identificadores deterministicos (`key={project.id}`, `key={skill.name}`, `key={category.title}`), permitindo que o algoritmo de reconciliacao (Fiber) do React preserve nos do DOM corretamente durante filtragens.
  - Uso de `useMemo` em `Projetos.jsx` e `Habilidades.jsx` para evitar reprocessar mapas de projetos a cada tecla digitada.
