import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootEl = document.getElementById('root')

// As rotas são pré-renderizadas (scripts/prerender.mjs) para crawlers e perceived
// performance: o HTML estático já pinta na hora. Não hidratamos porque o conteúdo
// é fortemente animado (boot do título, typewriter) e o estado pós-animação do
// snapshot não casa com o estado inicial do cliente. Em vez disso, montamos com
// createRoot: no primeiro commit o React substitui o conteúdo estático pela árvore
// renderizada (tocando as animações). Crawlers veem o HTML estático; o usuário vê
// o app montar normalmente, sem erros de hidratação.
createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
