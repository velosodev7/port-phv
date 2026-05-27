import "./Processo.css";

const itens = [
  {
    id: "negocio",
    titulo: "Entender a regra de negócio",
    descricao:
      "Antes de abrir o editor, busco entender qual problema real estou resolvendo e quem usa o que vou construir. Código bom resolve regra de negócio — não só passa lint.",
  },
  {
    id: "automacao",
    titulo: "Automatizar o que se repete",
    descricao:
      "Identifico tarefas repetitivas e automatizo — scripts, hooks, fluxos de deploy, integrações. Tempo poupado vira tempo para resolver problemas que importam.",
  },
  {
    id: "ui",
    titulo: "UI como parte do código",
    descricao:
      "Componentes pequenos, tokens centralizados, acessibilidade básica desde o início (alt, aria-label, foco visível, contraste).",
  },
  {
    id: "git",
    titulo: "Versionamento disciplinado",
    descricao:
      "Git e GitHub em todo projeto, com branches por feature, commits descritivos e histórico legível. Este portfólio segue o mesmo fluxo.",
  },
  {
    id: "review",
    titulo: "Revisão antes de mergear",
    descricao:
      "Reviso meu próprio diff antes de subir, leio criticamente o que vai entrar em produção e refatoro o que não faz sentido manter.",
  },
  {
    id: "deploy",
    titulo: "Deploy contínuo",
    descricao:
      "Acostumado a pipelines onde merge na main vira deploy automático. Aprendi a tratar produção com cuidado — e a confiar no que entrego.",
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
