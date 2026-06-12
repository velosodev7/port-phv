import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="notfound">
      <div className="container notfound-inner">
        <p className="notfound-code">// GAME OVER · ERRO 404</p>
        <h1 className="notfound-title">Fase não encontrada</h1>
        <p className="notfound-text">
          Essa sala não existe (ainda). Use o continue e escolha uma fase no
          menu.
        </p>
        <Link to="/" className="notfound-link">
          <span aria-hidden="true">▸</span>
          <span>Continue · voltar ao início</span>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
