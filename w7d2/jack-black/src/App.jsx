import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PlantList from "./components/PlantList";

import { plant1, plant2, plant3, plant4 } from "./data/plantData";

function App() {
  const [plants, setPlants] = useState([]);

  const addAPlant = () => {
    const availablePlants = [plant1, plant2, plant3, plant4];

    const newPlants = [...plants, availablePlants[plants.length]];

    setPlants(newPlants);
  };

  return (
    <div className="App">
      <Header amountOfPlants={plants.length} />
      <button onClick={addAPlant}>ADD A PLANT!</button>
      <main>
        <PlantList plants={plants} />
      </main>
    </div>
  );
}

export default App;
