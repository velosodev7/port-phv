import React from "react";
import "./Sobre.css";

import { FaLaptopCode, FaGraduationCap, FaRocket } from "react-icons/fa";

function Sobre() {
  return (
    <section className="sobre-section">
      <div className="sobre-container">
        <h1 className="sobre-titulo">Sobre Mim</h1>
        <div className="sobre-conteudo">
          <div className="sobre-texto">
            <h2>
              Olá, eu sou <span className="nome-destaque">Pedro Veloso</span> !
            </h2>
            <p>
              Sou <strong>estudante de Desenvolvimento Full Stack</strong> e
              apaixonado por tecnologia, inovação e pela construção de soluções
              que unem design e funcionalidade. Estou em constante aprendizado,
              explorando o ecossistema JavaScript — desde o{" "}
              <strong>frontend com React</strong> até o{" "}
              <strong>backend com Node.js</strong>.
            </p>
            <p>
              Meu objetivo é me tornar um desenvolvedor completo, capaz de
              transformar ideias em aplicações modernas, rápidas e intuitivas.
              Além do código, gosto de entender o impacto real que a tecnologia
              pode causar na vida das pessoas.
            </p>
            <p>
              Quando não estou programando, estou estudando novas ferramentas,
              aprimorando meus projetos pessoais ou explorando boas práticas de
              UI/UX para entregar experiências cada vez melhores.
            </p>
          </div>

          <div className="sobre-icones">
            <div className="icone-box">
              <FaGraduationCap size={40} />
              <h3>Formação</h3>
              <p>
                Estudante de Desenvolvimento Full Stack — focado em React,
                Node.js e bancos de dados.
              </p>
            </div>

            <div className="icone-box">
              <FaLaptopCode size={40} />
              <h3>Habilidades</h3>
              <p>
                HTML, CSS, JavaScript, React, Node.js, Git, Firebase, e
                metodologias ágeis.
              </p>
            </div>

            <div className="icone-box">
              <FaRocket size={40} />
              <h3>Objetivo</h3>
              <p>
                Atuar como desenvolvedor full stack e crescer profissionalmente
                em projetos desafiadores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
