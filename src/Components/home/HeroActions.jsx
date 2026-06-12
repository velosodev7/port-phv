import { Link } from "react-router-dom";
import { contact } from "../../data/contact.js";
import { titleScreen } from "../../data/meta.js";
import "./HeroActions.css";

const HeroActions = () => {
  return (
    <div className="title-actions">
      <Link to={titleScreen.startTo} className="press-start">
        <span className="press-start__caret" aria-hidden="true">
          ▸
        </span>
        <span className="press-start__label">{titleScreen.start}</span>
        <span className="press-start__cursor" aria-hidden="true" />
      </Link>

      <p className="title-hint">
        <span>{titleScreen.startHint}</span>
        <span className="title-hint__sep" aria-hidden="true">
          ·
        </span>
        <a
          className="title-hint__link"
          href={contact.github.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </p>
    </div>
  );
};

export default HeroActions;
