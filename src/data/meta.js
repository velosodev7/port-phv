export const meta = {
  documento: "PORTFÓLIO 2026",
  assunto: "PEDRO VELOSO · DESENVOLVEDOR FULL-STACK",
  tagline: [
    { text: "Construindo produtos web com " },
    { text: "React", accent: true },
    { text: ", " },
    { text: "Node.js", accent: true },
    { text: " e " },
    { text: "PostgreSQL", accent: true },
    { text: ". Foco em performance, DX e entregas previsíveis." },
  ],
};

// Title Screen (Fase 1 — retro-terminal). Conteúdo real, sem imagem.
export const titleScreen = {
  system: "PHV-DEV · SYSTEM 2026",
  status: "HP ████░ · XP ▓▓▓",
  name: { first: "PEDRO", last: "VELOSO" },
  role: "Full-stack Developer",
  stack: ["React", "Node.js", "JavaScript", "Python"],
  start: "PRESS START",
  startTo: "/projetos",
  startHint: "Inserir ficha · ver projetos",
  footer: "© 2026 · phvdev.com.br",
};

export const sections = [
  { id: "01", path: "/sobre", label: "Sobre" },
  { id: "02", path: "/projetos", label: "Projetos" },
  { id: "03", path: "/stack", label: "Stack" },
  { id: "04", path: "/blog", label: "Blog" },
  { id: "05", path: "/contato", label: "Contato" },
];

// Origem canônica do site (sem barra final). Usada em canonical/OG e no prerender.
export const SITE_URL = "https://www.phvdev.com.br";

// SEO por rota. Alimenta o componente <Seo>: title, description, canonical e OG.
// As rotas prerenderizadas (scripts/prerender.mjs) usam estas mesmas chaves.
export const seo = {
  "/": {
    title: "Pedro Veloso — Desenvolvedor Full-stack",
    description:
      "Portfólio de Pedro Veloso, desenvolvedor full-stack focado em React, Node.js e PostgreSQL. Projetos, stack técnica e contato.",
  },
  "/sobre": {
    title: "Sobre — Pedro Veloso",
    description:
      "Quem é Pedro Veloso: backstory, formação e o processo de trabalho de um desenvolvedor full-stack focado em React e Node.js.",
  },
  "/projetos": {
    title: "Projetos — Pedro Veloso",
    description:
      "Projetos de Pedro Veloso — produtos web construídos com React, Node.js e PostgreSQL, com foco em performance e entregas previsíveis.",
  },
  "/stack": {
    title: "Stack — Pedro Veloso",
    description:
      "Stack técnica de Pedro Veloso: React, Node.js, JavaScript, Python e as ferramentas do dia a dia, organizadas por nível de domínio.",
  },
  "/blog": {
    title: "Blog — Pedro Veloso",
    description:
      "Logs e publicações de Pedro Veloso no TabNews sobre desenvolvimento web, carreira e bastidores dos projetos.",
  },
  "/contato": {
    title: "Contato — Pedro Veloso",
    description:
      "Fale com Pedro Veloso — e-mail, GitHub e LinkedIn. A rota mais rápida para iniciar uma conversa ou projeto.",
  },
};
