import MetaBlock from "../Components/ui/MetaBlock.jsx";
import SectionHeader from "../Components/ui/SectionHeader.jsx";
import TerminalWindow from "../Components/ui/TerminalWindow.jsx";
import ProjectList from "../Components/projetos/ProjectList.jsx";
import { meta } from "../data/meta.js";
import "./Projetos.css";

const Projetos = () => {
  return (
    <section className="projetos-page">
      <div className="container">
        <MetaBlock
          documento={meta.documento}
          assunto="§02 · PROJETOS"
          status={null}
        />

        <SectionHeader
          index="02"
          title="Projetos"
          kicker="O QUE VENHO CONSTRUINDO"
        />

        <TerminalWindow title="$ ls ~/projetos" className="projetos-terminal">
          <ProjectList />
        </TerminalWindow>
      </div>
    </section>
  );
};

export default Projetos;
