import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a
            href="https://www.facebook.com/phvnunes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img src="/facebook.svg" alt="Facebook" />
          </a>

          <a
            href="https://www.instagram.com/phvnunes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src="/instagram.svg" alt="Instagram" />
          </a>

          <a
            href="https://wa.me/5522997733025"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="whatsapp"
          >
            <img src="/whatsapp-icon.png" alt="whatsapp" />
          </a>

          <a
            href="https://www.linkedin.com/in/pedrohsveloso/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src="/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
        {/* Copyright */}
        <p className="copyright">© 2025 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
