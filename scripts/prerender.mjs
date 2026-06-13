// Prerender estático das rotas via Puppeteer (Chromium headless).
//
// Sobe `vite preview` sobre o dist/ buildado, visita cada rota com o Chromium do
// Puppeteer (espera o React montar, içar a metadata do <Seo> para o <head> e os
// typewriters completarem) e grava o DOM serializado em dist/<rota>/index.html.
// Resultado: crawlers e scrapers (LinkedIn, etc.) recebem HTML completo + SEO
// correto por rota, sem depender de execução de JS.
//
// Usa o Chromium que o Puppeteer baixa no `npm install` — funciona igual no
// macOS local e no build da Vercel (que não tem Google Chrome).
//
// Uso:
//   node scripts/prerender.mjs              → todas as rotas
//   node scripts/prerender.mjs /sobre       → só as rotas passadas (spike)

import { spawn } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = join(ROOT, "dist");
const PORT = 4178;
const ORIGIN = `http://localhost:${PORT}`;

const ALL_ROUTES = ["/", "/sobre", "/projetos", "/stack", "/blog", "/contato"];
const routes = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ALL_ROUTES;

function fail(msg) {
  console.error(`\n✗ prerender: ${msg}`);
  process.exit(1);
}

if (!existsSync(DIST)) fail("dist/ não existe — rode `vite build` antes.");

async function waitForServer(url, timeoutMs = 15000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      /* ainda subindo */
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error("vite preview não respondeu a tempo.");
}

// Espera todos os <Typewriter> terminarem de digitar: o span animado precisa
// igualar o texto completo (aria-label). Garante que o snapshot tem o texto
// cheio (importante p/ o h1/nome do título no SEO), não um frame intermediário.
async function waitForTypewriters(page) {
  await page.waitForFunction(
    () =>
      [...document.querySelectorAll(".typewriter")].every((tw) => {
        const full = tw.getAttribute("aria-label") || "";
        const shown =
          tw.querySelector('[aria-hidden="true"]')?.textContent ?? "";
        return shown === full;
      }),
    { timeout: 15000 },
  );
}

// Renderiza a rota e devolve o HTML. NÃO grava: gravar dist/index.html aqui
// poluiria o fallback de SPA do `vite preview`, fazendo as rotas seguintes
// herdarem a metadata já injetada (title/canonical duplicados). Por isso
// capturamos tudo do shell pristino primeiro e só gravamos no fim.
async function renderRoute(browser, route) {
  const page = await browser.newPage();
  try {
    await page.goto(`${ORIGIN}${route}`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });
    await waitForTypewriters(page);
    const html = await page.content();
    return html.startsWith("<!DOCTYPE") ? html : `<!DOCTYPE html>\n${html}`;
  } finally {
    await page.close();
  }
}

function writeRoute(route, html) {
  const outDir = route === "/" ? DIST : join(DIST, route);
  mkdirSync(outDir, { recursive: true });
  const outFile = join(outDir, "index.html");
  writeFileSync(outFile, html, "utf8");
  return outFile;
}

const preview = spawn(
  "npx",
  ["vite", "preview", "--port", String(PORT), "--strictPort"],
  { cwd: ROOT, stdio: "ignore" },
);

let exitCode = 0;
let browser;
try {
  await waitForServer(`${ORIGIN}/`);
  browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-gpu"],
  });
  console.log(`prerender: ${routes.length} rota(s) via ${ORIGIN}`);
  // Fase 1: captura tudo do shell pristino (sem gravar — ver renderRoute).
  const captured = [];
  for (const route of routes) {
    captured.push([route, await renderRoute(browser, route)]);
  }
  // Fase 2: grava os arquivos.
  for (const [route, html] of captured) {
    const file = writeRoute(route, html);
    console.log(`  ✓ ${route.padEnd(11)} → ${file.replace(ROOT + "/", "")}`);
  }
  console.log("prerender: concluído.");
} catch (err) {
  exitCode = 1;
  console.error(`\n✗ ${err.message}`);
} finally {
  if (browser) await browser.close();
  preview.kill();
}
process.exit(exitCode);
