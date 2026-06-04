import MetaBlock from "../ui/MetaBlock.jsx";
import EditorialName from "../ui/EditorialName.jsx";
import CoralAccent from "../ui/CoralAccent.jsx";
import TerminalWindow from "../ui/TerminalWindow.jsx";
import HeroActions from "./HeroActions.jsx";
import { meta } from "../../data/meta.js";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-name">
      <div className="container hero-inner">
        <TerminalWindow title="pedro@phvdev: ~" className="hero-terminal">
          <MetaBlock
            documento={meta.documento}
            assunto={meta.assunto}
            status={meta.status}
          />
        </TerminalWindow>

        <p className="hero-prompt" aria-hidden="true">
          <span className="hero-prompt__cmd">whoami</span>
          <span className="hero-prompt__cursor" />
        </p>

        <div className="hero-name" id="hero-name">
          <EditorialName first="Pedro" last="Veloso" />
        </div>

        <p className="hero-tagline">
          {meta.tagline.map((part, i) =>
            part.accent ? (
              <CoralAccent key={i}>{part.text}</CoralAccent>
            ) : (
              <span key={i}>{part.text}</span>
            )
          )}
        </p>

        <HeroActions />
      </div>
    </section>
  );
};

export default Hero;
