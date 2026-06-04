import CoralAccent from "../ui/CoralAccent.jsx";
import "./Bio.css";

const Bio = () => {
  return (
    <div className="bio">
      <p>
        Sou desenvolvedor full-stack com foco em transformar regra de negócio em{" "}
        <CoralAccent>software que funciona</CoralAccent> — do entendimento do
        problema à entrega em produção. Trabalho com{" "}
        <CoralAccent>React</CoralAccent>, <CoralAccent>Node.js</CoralAccent> e o
        ecossistema JavaScript moderno, equilibrando código limpo, performance e
        experiência de uso.
      </p>
      <p>
        Mais do que escrever código, gosto de{" "}
        <CoralAccent>resolver problemas</CoralAccent>: entender o contexto do
        produto, identificar o que dá pra automatizar e propor soluções que
        economizam tempo. Cada projeto é tratado como produto, não como tarefa.
      </p>
    </div>
  );
};

export default Bio;
