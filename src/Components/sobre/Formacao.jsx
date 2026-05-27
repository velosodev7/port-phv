import "./Formacao.css";

const formacao = [
  {
    id: "engenharia-software",
    periodo: "2026 — em curso",
    instituicao: "Descomplica",
    titulo: "Engenharia de Software",
    detalhe:
      "Graduação focada em arquitetura de software, padrões de projeto, qualidade de código e fundamentos de engenharia.",
  },
  {
    id: "fullstack-dnc",
    periodo: "2024 — 2025 · concluído",
    instituicao: "Escola DNC",
    titulo: "Desenvolvimento Full-stack",
    detalhe:
      "Formação prática em React, Node.js e ecossistema JavaScript, com entregas reais de projetos do frontend ao backend.",
  },
];

const Formacao = () => {
  return (
    <ul className="formacao" aria-label="Linha do tempo de formação">
      {formacao.map((item) => (
        <li key={item.id} className="formacao-item">
          <span className="formacao-periodo">{item.periodo}</span>
          <div className="formacao-conteudo">
            <span className="formacao-instituicao">{item.instituicao}</span>
            <h3>{item.titulo}</h3>
            <p>{item.detalhe}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Formacao;
