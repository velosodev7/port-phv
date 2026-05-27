# Portfólio — Pedro Veloso

> Site pessoal de Pedro Veloso, desenvolvedor full-stack.
> Identidade editorial em tema escuro, foco em comunicar stack técnica e processo de trabalho.

**Produção:** [www.phvdev.com.br](https://www.phvdev.com.br)

---

## Sobre o projeto

Portfólio reescrito do zero com foco em três coisas:

- **Comunicar valor técnico** — stack visível no hero, projetos com problema/papel/stack/links em vez de só thumbnail.
- **Identidade editorial em dark mode** — tipografia mista (serif display + sans corpo + mono metadados), acento coral, sem gradientes decorativos.
- **Construção limpa** — design tokens em CSS variables, componentes pequenos e dedicados, dados separados do markup em `src/data/`.

Cada commit em `main` dispara deploy automático em produção, então o repositório também serve como exemplo do meu fluxo de trabalho (versionamento, revisão, deploy contínuo).

---

## Stack

- **React 19** + **Vite 7**
- **React Router 7** para roteamento
- **react-icons** (feather) para ícones
- **CSS puro com design tokens** em CSS variables (sem Tailwind)
- Fontes via Google Fonts no `<link>`: **Instrument Serif**, **Inter**, **JetBrains Mono**

---

## Estrutura

```
src/
├── App.jsx              # rotas isoladas
├── main.jsx
├── index.css            # importa tokens + reset + global
├── styles/
│   ├── tokens.css       # cores, tipografia, espaçamento
│   ├── reset.css        # reset mínimo
│   └── global.css       # body dark, container, utilitários
├── data/
│   ├── meta.js          # bloco // DOCUMENTO/ASSUNTO/STATUS + tagline + seções
│   ├── contact.js       # email, github, linkedin, cv
│   ├── projects.js      # array de projetos
│   ├── stack.js         # categorias de tecnologias
│   └── posts.js         # artigos do blog (vazio enquanto não houver)
├── Components/
│   ├── Header.jsx       # nav sticky com hambúrguer mobile
│   ├── Footer.jsx       # minimal: copyright + voltar ao topo
│   ├── ui/              # MetaBlock, AvailabilityStatus, EditorialName,
│   │                    # SectionHeader, CoralAccent
│   ├── home/            # Hero, HeroActions
│   ├── sobre/           # Bio, Processo, Formacao
│   ├── projetos/        # ProjectCard, ProjectList
│   ├── stack/           # StackCategory, TechChip
│   ├── blog/            # EmptyState
│   └── contato/         # ContactList, ContactItem
└── Pages/
    ├── Home.jsx         # Hero
    ├── Sobre.jsx        # Bio + Processo + Formação
    ├── Projetos.jsx     # ProjectList
    ├── Stack.jsx        # categorias agrupadas
    ├── Blog.jsx         # EmptyState
    ├── Contato.jsx      # ContactList
    └── NotFound.jsx     # 404 estilizada
```

---

## Rodando localmente

```bash
git clone https://github.com/velosodev7/port-phv.git
cd port-phv
npm install
npm run dev          # http://localhost:5173
npm run build        # produção
npm run preview      # serve a build
npm run lint
```

---

## Atualizando conteúdo sem mexer no JSX

A maior parte do conteúdo está em `src/data/`:

- **Projetos novos** → adicionar entrada em `projects.js` seguindo o shape existente (`id`, `titulo`, `problema`, `papel`, `stack[]`, `github`, `demo`, `imagem`, `ano`, `tipo`).
- **Stack** → editar `stack.js` ajustando categorias e níveis (`proficiente`, `intermediário`, `estudando`).
- **Tagline e status** → editar `meta.js`.
- **Contato** → editar `contact.js` (incluindo o `cv` quando o PDF estiver disponível).

---

## Contato

- **E-mail:** [pedrovelosonunes@gmail.com](mailto:pedrovelosonunes@gmail.com)
- **GitHub:** [@velosodev7](https://github.com/velosodev7)
- **LinkedIn:** [/in/pedrohsveloso](https://www.linkedin.com/in/pedrohsveloso/)
