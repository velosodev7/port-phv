# Handoff — pós-lançamento do redesign retro-terminal

> Última atualização: 2026-06-13. Retomar daqui.

## Estado atual (TUDO no ar)

- **Produção:** https://www.phvdev.com.br — validado, build idêntico ao local
  (hash `index-D1Iyo4Fe.js` confere). Apex `phvdev.com.br` redireciona 307 → www.
- **Branch:** trabalho mergeado em `main` (fast-forward) e **já em produção**.
  `main` == `feature/retro-terminal-title-screen` == commit `42973a3`.
- **Deploy:** Vercel auto-deploy no push de `main`. Verifiquei que deep-links
  (`/projetos`, `/sobre`, …) retornam **200** — a Vercel já faz fallback de SPA
  para Vite, **não precisa de `vercel.json`** de rewrite.
- Dev server local foi encerrado.

## O que foi feito nesta sessão

1. Fechadas as "decisões em aberto" do `retro-terminal-spec.md`
   (sprite = implementado via PixelAvatar; SFX = adiado formalmente). Commit `4b5f2ef`.
2. `feat(avatar)` `fee06f9` — pulo idle com arco/squash/double-blink (antes era teleporte).
3. `feat(home)` `7d81d6e` — componente `Typewriter` + boot do Title Screen
   (sistema → nome → role → stack digitam em sequência; avatar + PRESS START em fade).
   Stack do title screen atualizada para React · Node.js · JavaScript · Python.
4. `feat` `42973a3` — Typewriter nos comandos de `SectionHeader` por rota
   (`whoami`, `select-stage --all`, `inventory --equipped`, `git log --oneline`,
   `./connect.sh`) + PixelAvatar substituindo o texto "PV" no card de Sobre.

Tudo com lint + build limpos. `prompt.md` e `.claude/` ficaram fora dos commits (locais).

---

## PENDÊNCIAS — review completo (SEO + performance + bugs)

Resultado da análise feita em 2026-06-13. Priorizado. **Nada disso está feito ainda.**

### Quick wins (alto impacto, ~15-20 min) — ✅ FEITOS na branch `fix/seo-perf-quickwins`

- [x] **og:image / twitter:image com URL absoluta** — `index.html` agora usa
      `https://www.phvdev.com.br/og-card.png` + `og:image:width/height/type`.
- [x] **Gerar `public/og-card.png` 1200×630** a partir de `public/og-card.svg`.
      Rasterizado via headless Chrome (ImageMagick não renderiza a fonte Press Start 2P;
      Chrome carrega a fonte do Google Fonts). Render conferido visualmente. SVG mantido
      como fonte editável.
- [x] **`public/robots.txt`** (Allow + `Sitemap:`) e **`public/sitemap.xml`**
      com as 6 rotas criados.
- [x] **`<h1>` por página interna** — `SectionHeader` ganhou prop `as` (default `h2`);
      o 1º header de Sobre/Projetos/Stack/Blog/Contato agora é `as="h1"`. (Home/Hero já
      tinha h1.) `EditorialName.jsx` **continua dead code** — não promovido porque o
      conteúdo dele é o nome "Pedro Veloso", inadequado p/ headings internos. Candidato
      a remoção (junto do `.css`) numa próxima limpeza.
- [x] **BUG reset do `doneRef` no Typewriter** — corrigido: `doneRef.current = false`
      no início do efeito; guarda removida do early-return.
- [x] **`BlogTabNews` "CARREGANDO" enganoso** — estado vazio agora diz
      "Nenhuma publicação ainda." (kicker `// FEED`).
- [x] **`cursor: pointer` no PixelAvatar** — removido.

### Maiores (alto retorno, mais esforço)

- [ ] **Self-host das fontes** — `index.html:36-42` carrega 4 famílias do Google Fonts
      render-blocking. A Fase 0 do `retro-terminal-spec.md` já previa self-host
      (`public/fonts/*.woff2` + `@font-face` + `font-display: swap` + preload da fonte
      do Hero). MAIOR ganho de LCP. Remover `<link>`/`preconnect` do Google depois.
- [ ] **Meta/title por rota** — hoje todas as rotas têm o mesmo `<title>`/description.
      Usar tags nativas do React 19 (hoist) ou `react-helmet-async`, alimentado por
      `src/data/meta.js` (já tem `sections`). Resolve canibalização de indexação.
      Adicionar `<link rel="canonical">` por rota junto.
- [ ] **Prerender estático** (vite-react-ssg ou similar) — SPA hoje serve HTML vazio;
      crawlers sem JS (LinkedIn/IA) veem página em branco. 6 rotas estáticas = ROI alto.
      Resolve a raiz e facilita meta-por-rota + JSON-LD.
- [ ] **Code splitting** — `src/App.jsx:7-13` importa as 7 páginas estaticamente
      (bundle único 262KB). `React.lazy` + `Suspense` por rota; `manualChunks` no
      `vite.config.js` para chunk de vendor estável (cache).
- [ ] **JSON-LD** `Person` + `WebSite` (usar links de `src/data/contact.js`).
- [ ] **Reduzir `logo.png`** (2272×1797, 166KB) — gerar apple-touch-icon 180×180 dedicado.

### Itens menores / dívida anotada

- Reduced-motion: os 5 Typewriter do Hero chamam `onDone` no mount simultaneamente;
  funciona só por causa do `Math.max` no `advanceTo` — frágil, não urgente.
- Listener de Enter no Hero usa allowlist por `tagName` (frágil p/ `role=button`,
  `contenteditable`) — baixo risco hoje.
- `useFx` `getServerSnapshot` retorna `true` fixo — só importaria se migrar p/ SSR.
- Rota inexistente devolve 200 (soft 404) em vez de 404 — impacto SEO pequeno.

---

## Como retomar

> Quick wins já estão na branch `fix/seo-perf-quickwins` (lint+build limpos), ainda
> **não mergeados/deployados**. Próximo passo é revisar/mergear e atacar os **Maiores**.

1. Revisar a branch `fix/seo-perf-quickwins` e mergear em `main` (dispara Vercel).
   Validar pós-deploy: `og-card.png`, `robots.txt`, `sitemap.xml` acessíveis em prod;
   preview social no [opengraph.xyz](https://www.opengraph.xyz) ou debugger do LinkedIn.
2. Decidir sobre os **Maiores** — sugestão: prerender + meta-por-rota juntos
   (um habilita o outro). Pode valer perguntar ao Pedro a prioridade.
3. Deploy: merge em `main` + push (dispara Vercel). Validar com
   `curl -sL .../ | grep assets/index-` (hash bate com build local).
