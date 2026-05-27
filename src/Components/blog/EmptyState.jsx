import { Link } from "react-router-dom";
import "./EmptyState.css";

const EmptyState = () => {
  return (
    <div className="blog-empty">
      <p className="blog-empty__kicker">// EM BREVE</p>
      <p className="blog-empty__title">
        Primeiro artigo <em>no forno</em>.
      </p>
      <p className="blog-empty__text">
        Este espaço é para artigos técnicos autorais sobre o que venho aprendendo
        — anotações de estudo, decisões de arquitetura nos meus projetos e
        receitas práticas de React, Node e ferramentas que uso no dia a dia.
      </p>
      <Link to="/projetos" className="blog-empty__link">
        <span>Ver projetos enquanto isso</span>
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
};

export default EmptyState;
