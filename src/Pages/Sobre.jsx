import MetaBlock from "../Components/ui/MetaBlock.jsx";
import SectionHeader from "../Components/ui/SectionHeader.jsx";
import TerminalWindow from "../Components/ui/TerminalWindow.jsx";
import CharacterSheet from "../Components/sobre/CharacterSheet.jsx";
import Bio from "../Components/sobre/Bio.jsx";
import Processo from "../Components/sobre/Processo.jsx";
import Formacao from "../Components/sobre/Formacao.jsx";
import { meta } from "../data/meta.js";
import "./Sobre.css";

const Sobre = () => {
  return (
    <section className="sobre">
      <div className="container">
        <MetaBlock
          documento={meta.documento}
          assunto="ROOM 01 · SOBRE"
          status={null}
        />

        <SectionHeader as="h1" index="01" title="Save File" command="whoami" />

        <TerminalWindow title="$ cat ~/save/pedro.dat" className="sobre-save">
          <CharacterSheet />
        </TerminalWindow>

        <div className="sobre-bloco">
          <SectionHeader index="01.A" title="Backstory" kicker="QUEM É PEDRO" />
          <Bio />
        </div>

        <div className="sobre-bloco">
          <SectionHeader
            index="01.B"
            title="Habilidades"
            kicker="COMO ENTREGO"
          />
          <Processo />
        </div>

        <div className="sobre-bloco">
          <SectionHeader
            index="01.C"
            title="Timeline"
            kicker="LINHA DO TEMPO"
          />
          <Formacao />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
