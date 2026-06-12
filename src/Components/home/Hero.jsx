import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TerminalWindow from "../ui/TerminalWindow.jsx";
import PixelAvatar from "./PixelAvatar.jsx";
import HeroActions from "./HeroActions.jsx";
import FxToggle from "../ui/FxToggle.jsx";
import { titleScreen } from "../../data/meta.js";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  // "PRESS START" arcade: Enter inicia o jogo. Se o foco já está num elemento
  // interativo, deixa o comportamento nativo (link/botão) agir — sem hijack.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Enter") return;
      const tag = document.activeElement?.tagName;
      if (tag === "A" || tag === "BUTTON" || tag === "INPUT" || tag === "TEXTAREA") {
        return;
      }
      e.preventDefault();
      navigate(titleScreen.startTo);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  return (
    <section className="title" aria-labelledby="title-name">
      <div className="container title-inner">
        <TerminalWindow title="pedro@phvdev:~/start" className="title-screen">
          <div className="title-screen__body">
            <p className="title-system" aria-hidden="true">
              <span>{titleScreen.system}</span>
              <span className="title-system__status">{titleScreen.status}</span>
            </p>

            <h1 className="title-logo" id="title-name">
              <span className="title-logo__line">{titleScreen.name.first}</span>
              <span className="title-logo__line">{titleScreen.name.last}</span>
            </h1>

            <p className="title-role">{titleScreen.role}</p>

            <PixelAvatar />

            <p className="title-stack">
              {titleScreen.stack.map((tech, i) => (
                <Fragment key={tech}>
                  {i > 0 && (
                    <span className="title-stack__sep" aria-hidden="true">
                      ·
                    </span>
                  )}
                  <span className="title-stack__item">{tech}</span>
                </Fragment>
              ))}
            </p>

            <HeroActions />

            <div className="title-footer">
              <FxToggle />
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default Hero;
