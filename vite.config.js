import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Chunk de vendor estável (React + DOM + scheduler + Router): muda
        // raramente, então o navegador reaproveita o cache entre deploys do app.
        // Função (não array) para capturar o react-dom-client da React 19, que
        // o casamento por nome de pacote deixava cair no chunk do app.
        manualChunks(id) {
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom)[\\/]/.test(id)) {
            return "react-vendor";
          }
        },
      },
    },
  },
})
