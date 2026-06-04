import { Link } from "react-router-dom";
import { contact } from "../../data/contact.js";
import "./HeroActions.css";

const HeroActions = () => {
  return (
    <div className="hero-actions">
      <Link to="/projetos" className="hero-cta hero-cta--primary">
        <span>Ver projetos</span>
        <span aria-hidden="true">→</span>
      </Link>

      <a
        href={contact.github.url}
        className="hero-cta hero-cta--ghost"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>GitHub</span>
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
};

export default HeroActions;
