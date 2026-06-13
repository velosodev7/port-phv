import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TerminalWindow from "../ui/TerminalWindow.jsx";
import PixelAvatar from "./PixelAvatar.jsx";
import HeroActions from "./HeroActions.jsx";
import FxToggle from "../ui/FxToggle.jsx";
import Typewriter from "../ui/Typewriter.jsx";
import { titleScreen } from "../../data/meta.js";
import "./Hero.css";

// Etapas do boot: cada linha digita e, ao terminar, libera a próxima.
const STEP = {
  SYSTEM: 0,
  NAME_FIRST: 1,
  NAME_LAST: 2,
  ROLE: 3,
  STACK: 4,
  DONE: 5,
};

const Hero = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(STEP.SYSTEM);
  const stackLine = titleScreen.stack.join("  ·  ");

  // Avança a sequência sem regredir (Math.max protege contra reentradas).
  const advanceTo = useCallback(
    (next) => () => setStep((s) => Math.max(s, next)),
    []
  );

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
              <Typewriter
                text={`${titleScreen.system}    ${titleScreen.status}`}
                speed={28}
                startDelay={250}
                active={step === STEP.SYSTEM}
                onDone={advanceTo(STEP.NAME_FIRST)}
              />
            </p>

            <h1 className="title-logo" id="title-name">
              <span className="title-logo__line">
                <Typewriter
                  text={titleScreen.name.first}
                  speed={110}
                  startDelay={120}
                  active={step === STEP.NAME_FIRST}
                  onDone={advanceTo(STEP.NAME_LAST)}
                />
              </span>
              <span className="title-logo__line">
                <Typewriter
                  text={titleScreen.name.last}
                  speed={110}
                  startDelay={80}
                  active={step === STEP.NAME_LAST}
                  onDone={advanceTo(STEP.ROLE)}
                />
              </span>
            </h1>

            <p className="title-role">
              <Typewriter
                text={titleScreen.role}
                speed={55}
                startDelay={150}
                active={step === STEP.ROLE}
                onDone={advanceTo(STEP.STACK)}
              />
            </p>

            <div
              className={`title-reveal${
                step >= STEP.STACK ? " is-visible" : ""
              }`}
            >
              <PixelAvatar />
            </div>

            <p className="title-stack">
              <Typewriter
                text={stackLine}
                speed={32}
                startDelay={150}
                active={step === STEP.STACK}
                onDone={advanceTo(STEP.DONE)}
              />
            </p>

            <div
              className={`title-reveal${
                step >= STEP.DONE ? " is-visible" : ""
              }`}
            >
              <HeroActions />

              <div className="title-footer">
                <FxToggle />
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default Hero;
