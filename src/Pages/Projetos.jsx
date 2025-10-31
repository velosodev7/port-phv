import React from "react";
import "./Projetos.css";

const projetos = [
  {
    id: 1,
    title: "Projeto To-Do List",
    description: "Uma aplicação web para gerenciar tarefas diárias.",
    image: "/imagens/projeto-todolist.png",
  },
  {
    id: 2,
    title: "Projeto Comemoração de 4 meses de namoro.",
    description:
      "Uma aplicação web para surpresa e comemoração de 4 meses de namoro com minha namorada, Eduarda.",
    image: "/imagens/projeto-4mesesdenamoro.png",
  },
];

export default function Projetos() {
  return (
    <section className="container">
      <h2>Projetos</h2>
      {projetos.map((proj) => (
        <div key={proj.id} className="projeto-card">
          <img src={proj.image} alt={proj.title} />
          <div className="projeto-info">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
