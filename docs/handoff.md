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

- [x] **Self-host das fontes** — ✅ branch `feat/perf-fonts-splitting-icons`.
      8 woff2 (subset **latin** apenas — pt-BR cabe em U+0000-00FF + pontuação geral;
      latin-ext descartado, poupa ~250KB de Inter) em `public/fonts/`, `@font-face`
      com `font-display: swap` em `src/styles/fonts.css` (importado 1º em `index.css`).
      `index.html` agora faz **preload** das 2 fontes do Title Screen/LCP da home
      (Press Start 2P + JetBrains Mono 400); `<link>`/`preconnect` do Google removidos.
      Gerado por `/tmp/build-fonts.mjs` (descartável). Render conferido via Puppeteer
      (0 requests 404, fontes da página loaded).
- [x] **Meta/title por rota** — ✅ branch `feat/prerender-meta-por-rota`. Componente
      `src/Components/ui/Seo.jsx` usa metadata nativa do React 19 (title/description/
      canonical/OG/Twitter por rota), alimentado por `seo` em `src/data/meta.js`.
      `<Seo>` único dentro do Router resolve a rota. index.html não tem mais title/OG
      estáticos (evita duplicação).
- [x] **Prerender estático** — ✅ mesma branch. `scripts/prerender.mjs` sobe
      `vite preview` e usa Puppeteer (Chromium próprio, portável p/ Vercel) p/
      renderizar as 6 rotas e gravar `dist/<rota>/index.html` com HTML completo +
      meta. Captura do shell pristino e grava no fim (senão o fallback de SPA
      duplicaria meta). `npm run build` = `vite build && node scripts/prerender.mjs`.
      No cliente: `main.jsx` usa `createRoot` (não hidrata — conteúdo é animado;
      0 erros de hidratação) → crawlers veem HTML estático, usuário vê o app montar.
- [x] **Code splitting** — ✅ mesma branch. `src/App.jsx` usa `React.lazy` +
      `Suspense` para as 7 páginas (cada rota = chunk próprio). `vite.config.js`
      ganhou `manualChunks` **em forma de função** (o array por nome de pacote
      deixava o react-dom-client da React 19 cair no chunk do app) → `react-vendor`
      ~226KB/72KB gzip, estável e cacheável entre deploys; chunk shared do app caiu
      p/ ~10KB. Home agora carrega vendor + ~17KB de app em vez do bundle único.
- [x] **JSON-LD** `Person` + `WebSite` — ✅ no `<Seo>` (usa links de `src/data/contact.js`).
- [x] **Reduzir `logo.png`** — ✅ mesma branch. `logo.png` (2272×1797, 166KB) era
      usado só como favicon-PNG e apple-touch-icon. Removido; rasterizados de
      `favicon.svg` (nearest-neighbor, pixel-art crisp): `apple-touch-icon.png`
      180×180 (~600B) e `favicon-48.png` 48×48 (~525B). `index.html` aponta p/ eles.

### Itens menores / dívida anotada

- [x] Reduced-motion: o `Typewriter` agora só dispara `onDone` quando `active`
  (branch `chore/divida-menor`). A sequência de boot avança em ordem mesmo sem
  animação, sem depender do `Math.max` em `advanceTo`. Verificado via Puppeteer
  com `prefers-reduced-motion: reduce` (Title Screen chega ao estado final:
  avatar + ações + PRESS START visíveis).
- [x] Listener de Enter no Hero: troquei a allowlist por `tagName` por
  `el.closest('a, button, input, textarea, select, [role="button"], [role="link"],
  [contenteditable="true"]')` + `el.isContentEditable` — cobre interativos
  customizados. (mesma branch)
- [x] `EditorialName` dead code removido (`.jsx` + `.css`) — não era importado em
  lugar nenhum. (mesma branch)
- `useFx` `getServerSnapshot` retorna `true` fixo — só importaria se migrar p/ SSR.
  **Não tocado** (o prerender é client-render via Puppeteer; getServerSnapshot
  nem é exercido). Deixado de propósito.
- Rota inexistente devolve 200 (soft 404) em vez de 404 — impacto SEO pequeno.
  **Não tocado**: exigiria função serverless / config na Vercel p/ status 404 num
  SPA estático; retorno não justifica hoje.

---

## Como retomar

> **TUDO EM PRODUÇÃO.** Quick wins (`29a7b0c`) + prerender/meta-por-rota/JSON-LD
> (`01ae326`) mergeados em `main` e validados no ar (títulos por rota, canonical,
> OG, JSON-LD e conteúdo no HTML estático conferidos via curl).

### Build & deploy (estado atual)

- `npm run build` = `vite build && node scripts/prerender.mjs`. O prerender usa
  **caminho duplo de Chromium**: local = `puppeteer` cheio; **Vercel/CI =
  `@sparticuz/chromium` + `puppeteer-core`** (o puppeteer cheio baixa mas NÃO sobe
  no build da Vercel — falta `libnspr4.so`/libs; o @sparticuz traz embutidas).
  Detecção por `process.env.VERCEL`/`CI` em `scripts/prerender.mjs:launchBrowser`.
- `.puppeteerrc.cjs`: cache em `.cache/puppeteer` + `skipDownload` na Vercel/CI.
- Validar antes de push: `npm run build` gera `dist/<rota>/index.html` p/ as 6 rotas.
- Pós-deploy: `curl -s https://www.phvdev.com.br/sobre | grep '<title>'` →
  "Sobre — Pedro Veloso". Conferir crawlers no LinkedIn Post Inspector /
  [opengraph.xyz](https://www.opengraph.xyz).

### Próximos

> Os 3 "Maiores" restantes (self-host fontes, code splitting, ícones) foram
> feitos na branch `feat/perf-fonts-splitting-icons` — **falta validar no ar**
> após o merge. Pós-deploy: conferir no Network do DevTools que as woff2 vêm de
> `/fonts/`, que `react-vendor-*.js` carrega separado e que `apple-touch-icon.png`
> aparece. Rodar Lighthouse p/ medir o ganho de LCP.

Só sobram itens menores / dívida anotada (ver seção acima): reduced-motion dos
Typewriter, listener de Enter no Hero, soft-404, `EditorialName` dead code.
