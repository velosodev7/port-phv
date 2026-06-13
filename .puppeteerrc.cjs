const { join } = require("node:path");

/**
 * Guarda o Chromium do Puppeteer dentro do projeto (.cache/puppeteer) em vez do
 * ~/.cache global. Isso o mantém junto do build na Vercel/CI, evitando que um
 * cache de node_modules pule o download e deixe o `prerender` sem navegador.
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  cacheDirectory: join(__dirname, ".cache", "puppeteer"),
};
