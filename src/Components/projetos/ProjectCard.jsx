import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./ProjectCard.css";

const tipoLabel = {
  estudo: "Missão secundária",
  cliente: "Missão principal",
  freelance: "Missão freelance",
};

const ProjectCard = ({ project, fase }) => {
  const { titulo, problema, papel, stack, github, demo, imagem, ano, tipo } =
    project;

  const jogavel = Boolean(demo);
  const isBoss = tipo === "cliente";

  return (
    <article className={`stage-card${isBoss ? " stage-card--boss" : ""}`}>
      <div className="stage-card__top">
        <span className="stage-card__fase">FASE {fase}</span>
        <span
          className={`stage-card__status${
            jogavel ? " is-clear" : " is-locked"
          }`}
        >
          {jogavel ? "★ JOGÁVEL" : "● EM DEV"}
        </span>
      </div>

      <div className="stage-card__meta">
        <span className="stage-card__ano">{ano}</span>
        <span className="stage-card__tipo">{tipoLabel[tipo] ?? tipo}</span>
      </div>

      <h3 className="stage-card__title">{titulo}</h3>
      <p className="stage-card__problema">{problema}</p>
      <p className="stage-card__papel">{papel}</p>

      <ul className="stage-card__stack" aria-label="Stack do projeto">
        {stack.map((tech) => (
          <li key={tech} className="stage-card__chip">
            {tech}
          </li>
        ))}
      </ul>

      <div className="stage-card__links">
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="stage-card__link stage-card__link--play"
            aria-label={`Abrir demo de ${titulo}`}
          >
            <FiExternalLink aria-hidden="true" />
            <span>Jogar demo</span>
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="stage-card__link"
            aria-label={`Ver código de ${titulo} no GitHub`}
          >
            <FiGithub aria-hidden="true" />
            <span>Código</span>
          </a>
        )}
      </div>

      {imagem && (
        <div className="stage-card__thumb">
          <img src={imagem} alt={`Thumbnail do projeto ${titulo}`} loading="lazy" />
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
