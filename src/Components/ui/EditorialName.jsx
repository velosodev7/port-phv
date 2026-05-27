import "./EditorialName.css";

const EditorialName = ({ first = "Pedro", last = "Veloso" }) => {
  return (
    <h1 className="editorial-name" aria-label={`${first} ${last}`}>
      <span className="editorial-name__first">{first}</span>
      <span className="editorial-name__last">{last}</span>
    </h1>
  );
};

export default EditorialName;
