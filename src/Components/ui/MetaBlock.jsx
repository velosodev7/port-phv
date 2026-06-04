import "./MetaBlock.css";

const MetaBlock = ({ documento, assunto }) => {
  return (
    <dl className="meta-block">
      <div className="meta-row">
        <dt>// DOCUMENTO</dt>
        <dd>{documento}</dd>
      </div>
      <div className="meta-row">
        <dt>// ASSUNTO</dt>
        <dd>{assunto}</dd>
      </div>
    </dl>
  );
};

export default MetaBlock;
