import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Seo from "./Components/ui/Seo.jsx";
import PageTransition from "./Components/ui/PageTransition.jsx";

// Páginas importadas estaticamente (sem React.lazy). Cada rota é pré-renderizada
// (scripts/prerender.mjs) e, no mount, o createRoot substitui o HTML estático
// pela árvore React. Se as páginas fossem lazy, o chunk da rota não estaria
// pronto no primeiro commit → o Suspense pintaria o fallback (vazio) sobre o
// conteúdo pré-renderizado, colapsando o layout (footer pulava) e gerando CLS.
// O ganho de cache vem do chunk `react-vendor` (manualChunks no vite.config);
// as páginas são pequenas (~30KB somadas), então separá-las rendia pouco e
// custava CLS. Ver docs/handoff.md.
import Home from "./Pages/Home.jsx";
import Sobre from "./Pages/Sobre.jsx";
import Projetos from "./Pages/Projetos.jsx";
import Stack from "./Pages/Stack.jsx";
import Blog from "./Pages/Blog.jsx";
import Contato from "./Pages/Contato.jsx";
import NotFound from "./Pages/NotFound.jsx";

function App() {
  return (
    <Router>
      <Seo />
      <Header />
      <main>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
