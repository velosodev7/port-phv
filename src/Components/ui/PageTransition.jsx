import { useLocation } from "react-router-dom";
import "./PageTransition.css";

/**
 * Re-monta o conteúdo a cada troca de rota (via key=pathname) para tocar uma
 * animação de entrada estilo "CRT ligando" + uma scanline que varre a tela.
 * Tudo desligado sob prefers-reduced-motion.
 */
const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      <span className="page-transition__scan" aria-hidden="true" />
      {children}
    </div>
  );
};

export default PageTransition;
