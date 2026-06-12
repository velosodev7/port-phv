# Spec — Portfólio "Console de Carreira" (Var. B → Var. A)

> Especificação de implementação. **Não implementar antes de aprovação.**
> Referência visual: `public/ref.png` (tela 404 pixel-art).
> Caminho escolhido: **começar pela Var. B (Terminal Retrô)** como primeiro passo
> para chegar à **Var. A (Console RPG)**. A Var. B é literalmente a Fase 1 da Var. A — sem retrabalho.

---

## 1. Direção visual final

**"Console de Carreira" — HUD-first, gramática de jogo, leitura de portfólio.**

Um portfólio que se comporta como um console 8-bit, mas que **rola e lê como portfólio**.
A primeira entrega (Var. B) é a versão **terminal verde-fósforo**: pouco sprite, muito texto,
ASCII art no lugar de pixel-art colorida. Aproveita ~90% do que já existe (CRT, scanline,
dot-matrix, fonte mono) e não exige assets de imagem.

**Regra-mestra (inegociável):**
> A metáfora controla **navegação, moldura e tom** — nunca o conteúdo essencial.
> Nome, stack, descrições de projeto e links são sempre **texto real e legível**.
> O "game" é a casca, não o conteúdo.

Hoje a identidade está ~40% terminal / ~60% editorial. O destino é ~80% game.
A Var. B é o ponto intermediário que valida o conceito sem destruir a marca atual.

---

## 2. Regras de design

### Cor
- Base: `--bg #0a0a0a`, texto branco-osso `--text #f0ede6`. (sem mudança)
- **Verde `--terminal-green #4ee36b` = cor primária da UI-game**: HUD, seleção, cursor,
  títulos de tela, bordas ASCII, prompts.
- **Coral `--accent #e8572a` = cor de destaque/perigo**: hover de CTA, estado ativo,
  badge "cliente", erro. Uso pontual.
- Regra da referência: **UI neutra (preto/branco/verde); cor forte só em elementos pontuais.**

### Tipografia
- Sistema de 2 fontes:
  - **Pixel/bitmap** (`Press Start 2P`, ou `VT323` p/ blocos maiores) → **somente** títulos,
    HUD, labels, números grandes. Nunca em parágrafo.
  - **`JetBrains Mono` (atual)** → todo corpo de texto longo (bio, descrição de projeto).
- Hierarquia por **tamanho**, não por peso/itálico/serifa. Tracking largo. Caixa mista ou alta.
- Máximo 3 níveis visuais por tela (herói gigante → bloco médio → meta pequena).

### Layout e espaçamento
- Cada rota ganha uma **"moldura de tela"**: borda (ASCII/`border-image`) + título de tela no
  topo (`ROOM 02 — PROJETOS`). Miolo continua rolável com o conteúdo real.
- Composição **centralizada e vertical** nas telas-âncora (Title, 404). Páginas de conteúdo
  mantêm leitura linear por baixo da casca.
- Ritmo de espaço generoso e "quantizado" (sensação de grade de pixel). Nada encostado.

### Tom de texto
- Humor seco e **diegético** ("fala de dentro do jogo"), seguido de tradução real entre parênteses
  ou subtexto (quebra de quarta parede, como o botão "Return to Home Page" da referência).
- Linguagem de sistema já usada hoje (`whoami`, `§01`, `PORTFÓLIO 2026`) é reaproveitada e
  promovida.

### Movimento
- Reaproveitar scanline + dot-matrix existentes (`global.css`).
- Adicionar: cursor piscando (Title), micro-animações de seleção. Sprites idle só na Var. A.
- **Tudo respeita `prefers-reduced-motion`** (já existe; estender a todo movimento novo).

---

## 3. Mapeamento das rotas → metáfora de jogo

URLs **inalteradas** (sem quebra de SEO/links). Renomeação é só visual.

| Rota | Componente atual | Vira (metáfora) | Mecânica concreta (dado existente) |
|------|------------------|-----------------|-------------------------------------|
| `/` | `Home`/`Hero` | **Title Screen / "Insert Coin"** | Nome como logo + "PRESS START". Única tela 100% referência. |
| `/sobre` | `Sobre` (Bio/Formação/Processo) | **Save File / Character Sheet** | Classe = Full-stack, atributos, backstory. |
| `/projetos` | `Projetos` | **Stage Select / Missões** | `tipo: cliente` = missão principal; `tipo: estudo` = secundária; `ano` = ordem; `demo` presente = "JOGÁVEL". |
| `/stack` | `Stack` | **Inventário / Skill Tree** | `level`: `proficiente`=equipado, `intermediário`=desbloqueado, `estudando`=bloqueado/XP. |
| `/blog` | `Blog` (feed TabNews) | **Logs / Diário de bordo** | Feed externo real renderizado como terminal de logs. |
| `/contato` | `Contato` | **Continue? / Save & Quit** | E-mail, GitHub, LinkedIn como "selecione um contato". |
| `*` | `NotFound` (ogro 404) | **Easter egg canônico** | Já pronto; só alinhar fonte/escala ao sistema. |
| (global) | `Header` (`§01 Sobre…`) | **HUD / barra de fases** | `§01` → `ROOM 01`, persistente. |

---

## 4. Plano incremental (fases pequenas, reversíveis)

Tudo atrás de branch; deploy por fase. Nada de big-bang.

- **Fase 0 — Fundação de tokens.** Adicionar `--font-pixel` e papéis de cor (verde primário /
  coral perigo) em `tokens.css`. Self-host das fontes. **Sem mudança visual.** Risco: nenhum.
- **Fase 1 — Title Screen (Var. B).** Reescrever só o `Hero` como tela de título com "PRESS START",
  reusando scanline. Resto do site intocado. **Valida o conceito.** ← critérios na seção 5.
- **Fase 2 — HUD/Header.** `Header` vira barra de fases (`§01` → `ROOM 01`).
- **Fase 3 — Stage Select.** `Projetos` usa `tipo`/`ano`/`demo`.
- **Fase 4 — Inventário.** `Stack` mapeia `level` → equipado/desbloqueado/bloqueado.
- **Fase 5 — Save File / Continue.** `Sobre` e `Contato`.
- **Fase 6 — Polimento (entra na Var. A).** Sprites idle, SFX opcional (mudo por padrão),
  alinhar 404 ao sistema, micro-animações.

---

## 5. Critérios de aceite — Fase 1: Title Screen

Layout-alvo (texto real, não imagem, para tudo que importa):

```
┌─[ PHV-DEV · SYSTEM 2026 ]──────────── HP ████░ · XP ▓▓▓ ─┐
│                                                          │
│              PEDRO  V E L O S O                          │  ← nome como logo (pixel)
│              FULL-STACK DEVELOPER                        │  ← subtítulo mono
│                                                          │
│                   [ sprite idle 2f ]                     │  ← opcional / ausente na Var. B
│                                                          │
│        React · Node.js · PostgreSQL  (mono, legível)     │
│                                                          │
│              ▸ PRESS START  _                            │  ← cursor piscando → Stage Select
│                INSERIR FICHA · ver projetos              │  ← tradução real (4ª parede)
│                                                          │
└── © 2026 · scanline on · som: off ──────────────────────┘
```

**Aceite (todos obrigatórios):**

1. **Conteúdo real:** nome (`Pedro Veloso`), papel (`Full-stack Developer`) e stack
   (`React · Node.js · PostgreSQL`, de `meta.js`) presentes como **texto**, dentro de
   `<h1>`/`<h2>` semânticos. Nada essencial como imagem.
2. **CTA funcional e acessível:** "PRESS START" é `<button>` ou `<Link>` real, com rótulo
   acessível, que navega para `/projetos` (Stage Select). Funciona por **clique, Enter e Tab**;
   visível no foco.
3. **Quarta parede:** subtexto traduz a piada para ação real ("ver projetos").
4. **Tipografia conforme regra:** pixel só em logo/labels; nenhum parágrafo em fonte pixel.
5. **Cor conforme regra:** verde como cor da UI-game; coral só no hover/estado do CTA.
6. **Movimento:** cursor piscando e qualquer animação **desligam** sob `prefers-reduced-motion`.
7. **Responsivo:** em ≤ `--bp-mobile`, a composição centralizada vira **stack vertical simples**,
   sem overflow horizontal, moldura não quebra.
8. **Sem regressão:** demais rotas (`/sobre`, `/projetos`, `/stack`, `/blog`, `/contato`, `404`)
   continuam idênticas e funcionais. `npm run build` e `npm run lint` passam.
9. **Reversível:** mudança isolada no `Hero` (+ tokens da Fase 0); revertível sem tocar em
   outras telas.

---

## 6. Riscos: acessibilidade / mobile / performance

| # | Risco | Mitigação |
|---|-------|-----------|
| 1 | Fonte pixel ilegível em corpo | **Regra fixa:** pixel só em título/label; corpo em JetBrains Mono. |
| 2 | Contraste | Verde `#4ee36b` sobre `#0a0a0a` passa AA. Coral `#e8572a` **falha** em texto pequeno → coral só decorativo/grande ou bold ≥ 18px. |
| 3 | Movimento (scanline/cursor/shake/SFX) | Respeitar `prefers-reduced-motion` em **todo** efeito novo. |
| 4 | Teclado / leitor de tela | "PRESS START" e fases são `<button>`/`<a>`/`<nav>` reais com rótulo. Casca **nunca** vira `<div>` clicável. |
| 5 | SEO / recrutador apressado (90s) | Caminho de leitura linear por baixo do jogo; `<h1>`/`<h2>` semânticos com texto real. |
| 6 | Mobile | Composição centralizada é desktop; no mobile → stack vertical. Moldura adapta sem overflow. |
| 7 | Performance pixel-art | `image-rendering: pixelated`; fontes self-hosted com `font-display: swap`; bordas via `border-image` (sem arquivos extras). |

---

## 7. Arquivos prováveis a alterar

**Fase 0 (fundação):**
- `src/styles/tokens.css` — adicionar `--font-pixel`, papéis de cor verde/coral.
- `src/index.css` ou `src/styles/global.css` — `@font-face` self-host (Press Start 2P / VT323).
- `public/fonts/` (novo) — arquivos `.woff2` das fontes.

**Fase 1 (Title Screen):**
- `src/Components/home/Hero.jsx` — reescrita para Title Screen.
- `src/Components/home/Hero.css` — layout/moldura/cursor.
- `src/Components/home/HeroActions.jsx` / `.css` — CTA "PRESS START".
- `src/data/meta.js` — possível ajuste de copy (tagline → stack curta, subtexto da 4ª parede).
- (leitura, sem alterar) `src/Pages/Home.jsx`.

**Fases seguintes (referência, fora do escopo da Fase 1):**
- Fase 2: `src/Components/Header.jsx` / `Header.css`, `src/data/meta.js` (rótulos `ROOM`).
- Fase 3: `src/Pages/Projetos.jsx`, `src/Components/projetos/ProjectCard*`, `ProjectList*`.
- Fase 4: `src/Pages/Stack.jsx`, `src/Components/stack/StackCategory*`, `TechChip*`.
- Fase 5: `src/Pages/Sobre.jsx` (+ `sobre/*`), `src/Pages/Contato.jsx` (+ `contato/*`).
- Fase 6: `src/Pages/NotFound.jsx` / `NotFound.css`, assets de sprite/SFX.

---

## Decisões em aberto (não bloqueiam a Fase 1)
- Sprite/mascote próprio: adiar para Fase 6 (Var. A). Var. B roda sem sprite.
- SFX 8-bit: opcional, sempre mudo por padrão com toggle. Só se houver tempo.
