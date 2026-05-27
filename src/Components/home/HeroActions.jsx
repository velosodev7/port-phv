import { Link } from "react-router-dom";
import { contact } from "../../data/contact.js";
import "./HeroActions.css";

const HeroActions = () => {
  const cvAvailable = Boolean(contact.cv);

  return (
    <div className="hero-actions">
      <Link to="/projetos" className="hero-cta hero-cta--primary">
        <span>Ver projetos</span>
        <span aria-hidden="true">→</span>
      </Link>

      {cvAvailable ? (
        <a
          href={contact.cv}
          className="hero-cta hero-cta--ghost"
          download
        >
          <span>Baixar CV</span>
          <span aria-hidden="true">↓</span>
        </a>
      ) : (
        <span className="hero-cta hero-cta--ghost is-disabled" aria-disabled="true">
          <span>CV em breve</span>
        </span>
      )}
    </div>
  );
};

export default HeroActions;
