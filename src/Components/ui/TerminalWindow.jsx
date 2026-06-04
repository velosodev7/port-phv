import "./TerminalWindow.css";

/**
 * Moldura de janela de terminal (CRT) — barra com 3 dots + título mono,
 * borda com glow verde sutil e fundo levemente esverdeado.
 * Uso pontual para enquadrar blocos de conteúdo no estilo "dev".
 *
 * @param {string} title - texto da barra (ex: "$ ls ~/projetos")
 * @param {React.ReactNode} children - conteúdo enquadrado
 * @param {string} [className] - classes extras no contêiner
 * @param {boolean} [flush] - remove o padding do corpo (conteúdo encosta nas bordas)
 */
const TerminalWindow = ({ title = "terminal", children, className = "", flush = false }) => {
  return (
    <div className={`term-window ${className}`.trim()}>
      <div className="term-window__bar">
        <span className="term-window__dots" aria-hidden="true">
          <span className="term-window__dot term-window__dot--red" />
          <span className="term-window__dot term-window__dot--yellow" />
          <span className="term-window__dot term-window__dot--green" />
        </span>
        <span className="term-window__title">{title}</span>
      </div>
      <div className={`term-window__body${flush ? " term-window__body--flush" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
