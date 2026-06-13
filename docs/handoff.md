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
- [ ] **Code splitting** — `src/App.jsx` importa as 7 páginas estaticamente
      (bundle único ~265KB). `React.lazy` + `Suspense` por rota; `manualChunks` no
      `vite.config.js` para chunk de vendor estável (cache).
- [x] **JSON-LD** `Person` + `WebSite` — ✅ no `<Seo>` (usa links de `src/data/contact.js`).
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

### Próximos (Maiores restantes — independentes)

- Self-host das fontes (maior ganho de LCP), code splitting (`React.lazy` +
  `manualChunks`), reduzir `logo.png` + apple-touch-icon dedicado. Nenhum bloqueia
  o outro; podem ir a qualquer momento. Ver lista detalhada acima.
