import MetaBlock from "../Components/ui/MetaBlock.jsx";
import SectionHeader from "../Components/ui/SectionHeader.jsx";
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
          assunto="§03 · STACK"
          status={null}
        />

        <SectionHeader
          index="03"
          title="Stack"
          kicker="TECNOLOGIAS QUE USO"
        />

        <p className="stack-page__intro">
          Categorias organizadas por nível atual. O ponto colorido indica
          proficiência — <span className="accent">coral</span> para proficiente,{" "}
          cinza claro para intermediário, cinza escuro para em estudo.
        </p>

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
      </div>
    </section>
  );
};

export default Stack;
