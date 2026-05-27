import MetaBlock from "../Components/ui/MetaBlock.jsx";
import SectionHeader from "../Components/ui/SectionHeader.jsx";
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
          assunto="§01 · SOBRE"
          status={null}
        />

        <SectionHeader index="01" title="Sobre" kicker="QUEM É PEDRO" />
        <Bio />

        <div className="sobre-bloco">
          <SectionHeader
            index="01.A"
            title="Processo de trabalho"
            kicker="COMO ENTREGO"
          />
          <Processo />
        </div>

        <div className="sobre-bloco">
          <SectionHeader
            index="01.B"
            title="Formação"
            kicker="LINHA DO TEMPO"
          />
          <Formacao />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
