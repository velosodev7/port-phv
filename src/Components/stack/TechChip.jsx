import "./TechChip.css";

const levelDot = {
  proficiente: "is-strong",
  intermediário: "is-mid",
  estudando: "is-soft",
};

const TechChip = ({ name, level }) => {
  return (
    <li className="tech-chip" title={`Nível: ${level}`}>
      <span className={`tech-chip__dot ${levelDot[level] ?? "is-soft"}`} aria-hidden="true" />
      <span className="tech-chip__name">{name}</span>
      <span className="tech-chip__level">{level}</span>
    </li>
  );
};

export default TechChip;
