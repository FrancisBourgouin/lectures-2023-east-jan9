import { calculateDayDifference } from "../helpers/dateHelpers";

// Prop: id (string)
// Prop: type: (string)
// Prop: name: (string)
// Prop: lastWatered: (string of a date)
// Prop: wateringInterval: (integer)
export default function PlantListItem(props) {
  const { name, type, lastWatered, wateringInterval, id } = props;

  const plantHappy = calculateDayDifference(lastWatered) < wateringInterval;

  const articleStyle = {
    border: "0.3em solid black",
    borderColor: plantHappy ? "green" : "red",
    padding: "1em",
    margin: "1em",
  };
  return (
    <article style={articleStyle} className="PlantListItem">
      <h1>{name}</h1>
      <p>{type}</p>
      <p>Last watered on: {lastWatered}</p>
    </article>
  );
}
