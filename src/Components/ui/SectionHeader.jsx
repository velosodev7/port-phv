import Typewriter from "./Typewriter.jsx";
import "./SectionHeader.css";

const SectionHeader = ({ index, title, kicker, command }) => {
  return (
    <header className="section-header">
      <div className="section-header__top">
        <span className="section-header__index">§{index}</span>
        {command ? (
          <span className="section-header__command">
            <Typewriter text={command} speed={34} startDelay={180} />
          </span>
        ) : (
          kicker && <span className="section-header__kicker">{kicker}</span>
        )}
      </div>
      <h2 className="section-header__title">{title}</h2>
    </header>
  );
};

export default SectionHeader;
