import MetaBlock from "../Components/ui/MetaBlock.jsx";
import SectionHeader from "../Components/ui/SectionHeader.jsx";
import TerminalWindow from "../Components/ui/TerminalWindow.jsx";
import ContactList from "../Components/contato/ContactList.jsx";
import { meta } from "../data/meta.js";
import "./Contato.css";

const Contato = () => {
  return (
    <section className="contato-page">
      <div className="container">
        <MetaBlock
          documento={meta.documento}
          assunto="§05 · CONTATO"
        />

        <SectionHeader
          index="05"
          title="Contato"
          kicker="ONDE ME ENCONTRAR"
        />

        <p className="contato-page__intro">
          A forma mais rápida de me alcançar é por{" "}
          <span className="accent">e-mail</span>. GitHub e LinkedIn também estão
          logo abaixo.
        </p>

        <TerminalWindow title="$ contato --links">
          <ContactList />
        </TerminalWindow>
      </div>
    </section>
  );
};

export default Contato;
