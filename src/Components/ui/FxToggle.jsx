import { useFx } from "../../hooks/useFx.js";
import "./FxToggle.css";

const FxToggle = () => {
  const { enabled, toggle } = useFx();

  return (
    <button
      type="button"
      className={`fx-toggle${enabled ? " is-on" : ""}`}
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={`Efeitos visuais (CRT e animações): ${
        enabled ? "ligados" : "desligados"
      }. Clique para ${enabled ? "desligar" : "ligar"}.`}
    >
      <span className="fx-toggle__led" aria-hidden="true" />
      <span className="fx-toggle__label">
        CRT/FX: {enabled ? "ON" : "OFF"}
      </span>
    </button>
  );
};

export default FxToggle;
