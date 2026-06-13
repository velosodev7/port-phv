import PixelAvatar from "../home/PixelAvatar.jsx";
import "./CharacterSheet.css";

const stats = [
  ["Classe", "Full-stack Developer"],
  ["Status", "Online · disponível"],
  ["Foco", "Produtos web · React · Node"],
  ["Base", "Brasil · Remoto"],
];

const statusMeta = {
  equipado: { text: "EQUIPADO", fill: 100, cls: "is-equipped" },
  desbloqueado: { text: "DESBLOQUEADO", fill: 60, cls: "is-unlocked" },
  "em-xp": { text: "EM XP", fill: 25, cls: "is-locked" },
};

const attrs = [
  { label: "Front-end", status: "equipado" },
  { label: "Ferramentas", status: "equipado" },
  { label: "UI / Design", status: "desbloqueado" },
  { label: "Back-end", status: "em-xp" },
];

const CharacterSheet = () => {
  return (
    <div className="charsheet">
      <div className="charsheet__id">
        <div className="charsheet__avatar">
          <PixelAvatar />
        </div>
        <dl className="charsheet__stats">
          {stats.map(([key, value]) => (
            <div className="charsheet__row" key={key}>
              <dt>{key}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <ul className="charsheet__attrs" aria-label="Atributos">
        {attrs.map((attr) => {
          const meta = statusMeta[attr.status];
          return (
            <li className={`charsheet__attr ${meta.cls}`} key={attr.label}>
              <span className="charsheet__attr-label">{attr.label}</span>
              <span className="charsheet__attr-bar" aria-hidden="true">
                <span
                  className="charsheet__attr-fill"
                  style={{ width: `${meta.fill}%` }}
                />
              </span>
              <span className="charsheet__attr-status">{meta.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CharacterSheet;
