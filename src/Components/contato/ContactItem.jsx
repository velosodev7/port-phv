import "./ContactItem.css";

const ContactItem = ({
  index,
  label,
  value,
  href,
  icon: Icon,
  external = false,
  disabled = false,
  hint,
}) => {
  const isLink = href && !disabled;
  const commonProps = {
    className: `contact-item${disabled ? " is-disabled" : ""}`,
  };

  const inner = (
    <>
      <span className="contact-item__index">§05.{index}</span>
      <span className="contact-item__icon" aria-hidden="true">
        {Icon && <Icon />}
      </span>
      <span className="contact-item__body">
        <span className="contact-item__label">{label}</span>
        <span className="contact-item__value">{value}</span>
        {hint && <span className="contact-item__hint">{hint}</span>}
      </span>
      {!disabled && (
        <span className="contact-item__arrow" aria-hidden="true">
          {external ? "↗" : "→"}
        </span>
      )}
    </>
  );

  if (isLink) {
    return (
      <a
        {...commonProps}
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        aria-label={`${label}: ${value}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <div {...commonProps} aria-disabled="true">
      {inner}
    </div>
  );
};

export default ContactItem;
