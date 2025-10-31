import React from "react";
import "./Home.css";
import fotoHome from "../assets/foto-perfil.png";

const Home = () => {
  return (
    <section className="home">
      {/* 🔹 Container global + grid específica do Home */}
      <div className="container home-grid">
        <div className="home-text">
          <h1>
            Olá, eu sou Pedro Veloso
            <br />
            Desenvolvedor Full-stack!
          </h1>

          <p>
            Atuo como desenvolvedor full stack, construindo soluções web
            completas.
            <br />
            Meu foco é código limpo, performance e experiências de usuário,
            <br />
            sempre buscando aprendizado contínuo.
          </p>

          <button className="btn-primary">Download Resumo</button>
        </div>

        <div className="home-img">
          <img src={fotoHome} alt="Pedro Veloso - Desenvolvedor Full Stack" />
        </div>
      </div>
    </section>
  );
};

export default Home;
