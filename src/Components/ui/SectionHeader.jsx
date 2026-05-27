import "./SectionHeader.css";

const SectionHeader = ({ index, title, kicker }) => {
  return (
    <header className="section-header">
      <div className="section-header__top">
        <span className="section-header__index">§{index}</span>
        {kicker && <span className="section-header__kicker">{kicker}</span>}
      </div>
      <h2 className="section-header__title">{title}</h2>
    </header>
  );
};

export default SectionHeader;
