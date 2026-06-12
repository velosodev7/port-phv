import "./TechChip.css";

const levelMeta = {
  proficiente: { label: "EQUIPADO", cls: "is-equipped", fill: 100 },
  intermediário: { label: "DESBLOQUEADO", cls: "is-unlocked", fill: 60 },
  estudando: { label: "EM XP", cls: "is-locked", fill: 25 },
};

const TechChip = ({ name, level }) => {
  const meta = levelMeta[level] ?? levelMeta.estudando;

  return (
    <li className={`inv-item ${meta.cls}`} title={`Nível: ${level}`}>
      <span className="inv-item__name">{name}</span>
      <span className="inv-item__status">{meta.label}</span>
      <span className="inv-item__xp" aria-hidden="true">
        <span className="inv-item__xp-fill" style={{ width: `${meta.fill}%` }} />
      </span>
    </li>
  );
};

export default TechChip;
