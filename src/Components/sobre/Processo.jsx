import "./Processo.css";

const itens = [
  {
    id: "negocio",
    titulo: "Entender a regra de negócio",
    descricao: "Entendo qual problema real estou resolvendo antes de abrir o editor.",
  },
  {
    id: "automacao",
    titulo: "Automatizar o que se repete",
    descricao: "Tarefas repetitivas viram scripts, hooks e fluxos de deploy.",
  },
  {
    id: "ui",
    titulo: "UI como parte do código",
    descricao: "Componentes pequenos, tokens centralizados, acessibilidade desde o início.",
  },
  {
    id: "git",
    titulo: "Versionamento disciplinado",
    descricao: "Branches por feature, commits descritivos, histórico legível.",
  },
  {
    id: "review",
    titulo: "Revisão antes de mergear",
    descricao: "Reviso meu próprio diff antes de subir para produção.",
  },
  {
    id: "deploy",
    titulo: "Deploy contínuo",
    descricao: "Merge na main vira deploy automático — produção tratada com cuidado.",
  },
];

const Processo = () => {
  return (
    <ol className="processo">
      {itens.map((item, index) => (
        <li className="processo-item" key={item.id}>
          <span className="processo-numero">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="processo-conteudo">
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Processo;
