import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { sections } from "../data/meta.js";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="header-mark" aria-label="Pedro Veloso — início">
          <span className="header-mark__name">Pedro Veloso</span>
          <span className="header-mark__role">// FULL-STACK</span>
        </Link>

        <button
          type="button"
          className={`header-burger${open ? " is-open" : ""}`}
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="header-burger__bar" />
          <span className="header-burger__bar" />
        </button>

        <nav
          id="primary-nav"
          className={`header-nav${open ? " is-open" : ""}`}
          aria-label="Navegação principal"
        >
          <ul>
            {sections.map((section) => (
              <li key={section.path}>
                <NavLink
                  to={section.path}
                  className={({ isActive }) =>
                    `header-link${isActive ? " is-active" : ""}`
                  }
                >
                  <span className="header-link__index">§{section.id}</span>
                  <span className="header-link__label">{section.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
