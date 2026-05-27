import "./AvailabilityStatus.css";

const AvailabilityStatus = ({ label, active = true }) => {
  return (
    <span
      className={`availability${active ? " is-active" : " is-inactive"}`}
      role="status"
      aria-live="polite"
    >
      <span className="availability-dot" aria-hidden="true" />
      <span className="availability-label">{label}</span>
    </span>
  );
};

export default AvailabilityStatus;
