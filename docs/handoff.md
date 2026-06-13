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

### Quick wins (alto impacto, ~15-20 min) — começar por aqui

- [ ] **og:image / twitter:image com URL absoluta** — `index.html:61,72` usam
      `/logo.png` (relativo). Redes sociais não resolvem → preview sem imagem.
      Trocar por `https://www.phvdev.com.br/og-card.png`.
- [ ] **Gerar `public/og-card.png` 1200×630** a partir de `public/og-card.svg`
      (o SVG existe mas não funciona como og:image; comentário no arquivo já pedia
      rasterizar). Adicionar `og:image:width/height/type`.
- [ ] **Criar `public/robots.txt`** (Allow + linha `Sitemap:`) e
      **`public/sitemap.xml`** com as 6 rotas (`/`, `/sobre`, `/projetos`,
      `/stack`, `/blog`, `/contato`).
- [ ] **`<h1>` por página interna** — Sobre/Projetos/Stack/Blog/Contato começam
      no `<h2>` do SectionHeader, sem h1. Existe `src/Components/ui/EditorialName.jsx`
      (um `<h1>`) que é **dead code** — provavelmente era o h1 planejado; promover/usar.
- [ ] **BUG [alto] reset do `doneRef` no Typewriter** — `src/Components/ui/Typewriter.jsx`.
      `doneRef` nunca volta a `false`; se `text` mudar após concluído, trava no texto
      antigo e não re-dispara `onDone`. Latente (textos hoje são estáticos), mas corrigir:
      resetar `doneRef.current = false` no início do efeito e remover a guarda
      `doneRef.current` do early-return.
- [ ] **`BlogTabNews` "CARREGANDO" enganoso** (`BlogTabNews.jsx:20-29`) — dado é
      estático, nunca "carrega". Trocar texto do estado vazio para "Nenhuma publicação ainda".
- [ ] **`cursor: pointer` no PixelAvatar** (`PixelAvatar.css:12`) mas não é clicável —
      remover o cursor (ou tornar botão real).

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

1. `git checkout main && git pull` (confirmar que nada novo entrou).
2. Criar branch p/ os fixes: `git checkout -b fix/seo-perf-quickwins`.
3. Atacar os **Quick wins** na ordem da lista. Build/lint a cada passo.
4. Decidir sobre os **Maiores** — sugestão: prerender + meta-por-rota juntos
   (um habilita o outro). Pode valer perguntar ao Pedro a prioridade.
5. Deploy: merge em `main` + push (dispara Vercel). Validar com
   `curl -sL .../ | grep assets/index-` (hash bate com build local).
