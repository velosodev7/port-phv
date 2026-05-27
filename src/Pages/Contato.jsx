import MetaBlock from "../Components/ui/MetaBlock.jsx";
import SectionHeader from "../Components/ui/SectionHeader.jsx";
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
          status={meta.status}
        />

        <SectionHeader
          index="05"
          title="Contato"
          kicker="ONDE ME ENCONTRAR"
        />

        <p className="contato-page__intro">
          Estou aberto a conversas sobre projetos e colaborações.
          A forma mais rápida de me alcançar é por <span className="accent">e-mail</span>.
        </p>

        <ContactList />
      </div>
    </section>
  );
};

export default Contato;
