// Props: amountOfPlants (num)
export default function Header(props) {
  const { amountOfPlants } = props;

  return (
    <header className="Header">
      <h1>Super Watering App Of Destiny!</h1>
      <h2>
        {amountOfPlants === 0 && <em>Would be saving some plants... If I had any?</em>}
        {amountOfPlants > 1 && <em>Saving {amountOfPlants} plants from dehydration</em>}
        {amountOfPlants === 1 && <em>Saving a precious plant from dehydration</em>}
      </h2>
    </header>
  );
}
