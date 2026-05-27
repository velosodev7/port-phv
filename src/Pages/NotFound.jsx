import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="notfound">
      <div className="container notfound-inner">
        <p className="notfound-code">// ERRO 404</p>
        <h1 className="notfound-title">
          Página não <em>encontrada</em>
        </h1>
        <p className="notfound-text">
          A rota que você procurou não existe (ainda). Volte para o início e
          escolha uma seção do menu.
        </p>
        <Link to="/" className="notfound-link">
          <span>Voltar ao início</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
