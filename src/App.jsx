import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import PageTransition from "./Components/ui/PageTransition.jsx";

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
