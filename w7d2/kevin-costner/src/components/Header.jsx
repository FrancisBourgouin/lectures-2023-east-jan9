// Props: amountOfPlants (num)
export default function Header(props) {
  const { amountOfPlants } = props;

  return (
    <header className="Header">
      <h1>Super Watering App Of Destiny!</h1>
      <h2>
        <em>Saving {amountOfPlants} plants from dehydration</em>
      </h2>
    </header>
  );
}
