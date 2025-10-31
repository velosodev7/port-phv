import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/pedro-logo.svg";

const Header = () => {
  return (
    <header className="header">
      {/* 🔹 Usa o container global + estilização específica do header */}
      <div className="container header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
