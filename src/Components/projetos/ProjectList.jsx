import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../../data/projects.js";
import "./ProjectList.css";

const ProjectList = () => {
  if (projects.length === 0) {
    return (
      <p className="project-list__empty">
        Em breve · novos projetos sendo organizados aqui.
      </p>
    );
  }

  return (
    <div className="project-list">
      {projects.map((project, i) => (
        <ProjectCard
          key={project.id}
          project={project}
          fase={String(i + 1).padStart(2, "0")}
        />
      ))}
    </div>
  );
};

export default ProjectList;
