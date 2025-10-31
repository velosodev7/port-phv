import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

import Home from "./Pages/Home.jsx";
import Projetos from "./Pages/Projetos.jsx";
import Blog from "./Pages/Blog.jsx";
import Contato from "./Pages/Contato.jsx";

function App() {
  return (
    <Router>
      <Header />

      <main style={{ padding: "2rem" }}>
        <Routes>
          {/* Home inclui o Blog como parte da página */}
          <Route
            path="/"
            element={
              <>
                <Home />

                <Blog />

                <Projetos />
              </>
            }
          />

          {/* Blog sozinho */}
          <Route path="/blog" element={<Blog />} />

          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<h2>Página não encontrada 😕</h2>} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
