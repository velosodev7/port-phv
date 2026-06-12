import FxToggle from "./ui/FxToggle.jsx";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {year} Pedro Veloso · phvdev.com.br
        </p>
        <div className="footer-controls">
          <FxToggle />
          <button
            type="button"
            className="footer-top"
            onClick={scrollToTop}
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
