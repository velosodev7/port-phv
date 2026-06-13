import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Seo from "./Components/ui/Seo.jsx";
import PageTransition from "./Components/ui/PageTransition.jsx";

// Páginas carregadas sob demanda (code splitting): cada rota vira um chunk
// próprio, fora do bundle inicial. A Home é a entrada mais comum, mas mantê-la
// lazy também é vantajoso porque o conteúdo é pré-renderizado (HTML estático já
// pinta) — o chunk só baixa para animar/hidratar a interação.
const Home = lazy(() => import("./Pages/Home.jsx"));
const Sobre = lazy(() => import("./Pages/Sobre.jsx"));
const Projetos = lazy(() => import("./Pages/Projetos.jsx"));
const Stack = lazy(() => import("./Pages/Stack.jsx"));
const Blog = lazy(() => import("./Pages/Blog.jsx"));
const Contato = lazy(() => import("./Pages/Contato.jsx"));
const NotFound = lazy(() => import("./Pages/NotFound.jsx"));

function App() {
  return (
    <Router>
      <Seo />
      <Header />
      <main>
        <PageTransition>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/stack" element={<Stack />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
