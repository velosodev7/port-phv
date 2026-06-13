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
          assunto="ROOM 05 · CONTATO"
        />

        <SectionHeader
          as="h1"
          index="05"
          title="Continue?"
          command="./connect.sh"
        />

        <p className="contato-page__intro">
          Fim de jogo? Não — só o começo. A rota mais rápida é o{" "}
          <span className="accent">e-mail</span>. GitHub e LinkedIn também estão
          logo abaixo.
        </p>

        <TerminalWindow title="$ contact --select">
          <ContactList />
        </TerminalWindow>
      </div>
    </section>
  );
};

export default Contato;
