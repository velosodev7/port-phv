import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./ProjectCard.css";

const tipoLabel = {
  estudo: "Projeto de estudo",
  cliente: "Projeto de cliente",
  freelance: "Freelance",
};

const ProjectCard = ({ project }) => {
  const { titulo, problema, papel, stack, github, demo, imagem, ano, tipo } =
    project;

  return (
    <article className="project-card">
      <div className="project-card__meta">
        <span className="project-card__ano">{ano}</span>
        <span className="project-card__tipo">{tipoLabel[tipo] ?? tipo}</span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{titulo}</h3>
        <p className="project-card__problema">{problema}</p>
        <p className="project-card__papel">{papel}</p>

        <ul className="project-card__stack" aria-label="Stack do projeto">
          {stack.map((tech) => (
            <li key={tech} className="project-card__chip">
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-card__links">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label={`Ver código de ${titulo} no GitHub`}
            >
              <FiGithub aria-hidden="true" />
              <span>Código</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label={`Abrir demo de ${titulo}`}
            >
              <FiExternalLink aria-hidden="true" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>

      {imagem && (
        <div className="project-card__thumb">
          <img src={imagem} alt={`Thumbnail do projeto ${titulo}`} loading="lazy" />
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
