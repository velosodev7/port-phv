import CoralAccent from "../ui/CoralAccent.jsx";
import "./Bio.css";

const Bio = () => {
  return (
    <div className="bio">
      <p>
        Sou desenvolvedor full-stack com foco em transformar regra de negócio em{" "}
        <CoralAccent>software que funciona</CoralAccent> — do entendimento do
        problema à entrega em produção. Trabalho com{" "}
        <CoralAccent>React</CoralAccent>, <CoralAccent>Node.js</CoralAccent> e{" "}
        ferramentas do ecossistema JavaScript moderno, sempre buscando o
        equilíbrio entre código limpo, performance e experiência de uso.
      </p>
      <p>
        Mais do que escrever código, gosto de <CoralAccent>resolver problemas</CoralAccent>:
        entender o contexto do produto, identificar o que pode ser automatizado
        e propor soluções que economizam tempo e reduzem retrabalho. Cada projeto
        que entrego é tratado como produto, não como tarefa.
      </p>
      <p>
        Estou em formação contínua — concluí Desenvolvimento Full-stack na{" "}
        Escola DNC em 2025 e atualmente curso Engenharia de Software na
        Descomplica. Se você tem um projeto, uma colaboração ou só uma conversa
        boa sobre engenharia, dá um toque.
      </p>
    </div>
  );
};

export default Bio;
