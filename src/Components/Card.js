export default function Card(props) {
  return (
    <div className="card">
      <img src={props.details.image} alt={props.details.name + " image"} />
      <h3>{props.details.name}</h3>
      <p>Specality: {props.details.specality}</p>
      <span>{props.details.slot ? "Available" : "Not Available"}</span>
    </div>
  );
}
