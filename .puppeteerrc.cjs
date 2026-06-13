const { join } = require("node:path");

/**
 * Config do puppeteer cheio (usado só no desenvolvimento local). Guarda o
 * Chromium dentro do projeto (.cache/puppeteer) em vez do ~/.cache global.
 *
 * Na Vercel/CI o prerender usa @sparticuz/chromium (ver scripts/prerender.mjs),
 * então o Chromium do puppeteer cheio (que nem sobe lá por falta de libs) não é
 * necessário — `skipDownload` evita baixá-lo no build, poupando tempo.
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  cacheDirectory: join(__dirname, ".cache", "puppeteer"),
  skipDownload: !!process.env.VERCEL || !!process.env.CI,
};
