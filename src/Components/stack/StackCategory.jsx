import TechChip from "./TechChip.jsx";
import "./StackCategory.css";

const StackCategory = ({ id, label, items, index }) => {
  return (
    <section className="stack-category" aria-labelledby={`stack-${id}`}>
      <header className="stack-category__header">
        <span className="stack-category__index">§03.{index}</span>
        <h3 id={`stack-${id}`} className="stack-category__title">
          {label}
        </h3>
      </header>
      <ul className="stack-category__list">
        {items.map((item) => (
          <TechChip key={item.name} name={item.name} level={item.level} />
        ))}
      </ul>
    </section>
  );
};

export default StackCategory;
