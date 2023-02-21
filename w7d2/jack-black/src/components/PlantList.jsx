import PlantListItem from "./PlantListItem";

// Props: Plants (array of objects)
//        Prop: id (string)
//        Prop: type: (string)
//        Prop: name: (string)
//        Prop: lastWatered: (string of a date)
//        Prop: wateringInterval: (integer)
export default function PlantList(props) {
  const { plants } = props;

  const parsedPlants =
    Array.isArray(plants) &&
    plants.map((plant) => (
      // <PlantListItem name={plant.name} type={plant.type} lastWatered={plant.lastWatered} />
      <PlantListItem key={plant.id} {...plant} />
    ));

  return (
    <section className="PlantList">
      <h1>List of plants</h1>
      {parsedPlants}
      {!parsedPlants && <p>WHY IS THERE NO PLANTS HERE !</p>}
    </section>
  );
}
