import AvailabilityStatus from "./AvailabilityStatus.jsx";
import "./MetaBlock.css";

const MetaBlock = ({ documento, assunto, status }) => {
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
      {status && (
        <div className="meta-row">
          <dt>// STATUS</dt>
          <dd>
            <AvailabilityStatus label={status.label} active={status.active} />
          </dd>
        </div>
      )}
    </dl>
  );
};

export default MetaBlock;
