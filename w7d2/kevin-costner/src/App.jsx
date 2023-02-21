import "./App.css";
import Header from "./components/Header";
import PlantList from "./components/PlantList";

import { plants, emptyPlants } from "./data/plantData";

function App() {
  return (
    <div className="App">
      <Header amountOfPlants={plants.length} />
      <main>
        <PlantList plants={plants} />
      </main>
    </div>
  );
}

export default App;
