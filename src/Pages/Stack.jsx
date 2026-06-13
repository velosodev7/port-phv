import MetaBlock from "../Components/ui/MetaBlock.jsx";
import SectionHeader from "../Components/ui/SectionHeader.jsx";
import TerminalWindow from "../Components/ui/TerminalWindow.jsx";
import StackCategory from "../Components/stack/StackCategory.jsx";
import { meta } from "../data/meta.js";
import { stack } from "../data/stack.js";
import "./Stack.css";

const Stack = () => {
  return (
    <section className="stack-page">
      <div className="container">
        <MetaBlock
          documento={meta.documento}
          assunto="ROOM 03 · STACK"
          status={null}
        />

        <SectionHeader
          index="03"
          title="Inventário"
          command="inventory --equipped"
        />

        <p className="stack-page__intro">
          Itens organizados por categoria. O status indica domínio —{" "}
          <span className="accent">EQUIPADO</span> para proficiente,{" "}
          DESBLOQUEADO para intermediário, EM XP para o que ainda estudo.
        </p>

        <TerminalWindow title="$ inventory --list">
          <div className="stack-page__grid">
            {stack.map((category, i) => (
              <StackCategory
                key={category.id}
                id={category.id}
                label={category.label}
                items={category.items}
                index={String(i + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default Stack;
