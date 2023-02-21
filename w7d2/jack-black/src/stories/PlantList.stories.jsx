import { storiesOf } from "@storybook/react";
import PlantList from "../components/PlantList";

const plant3 = {
  id: "3",
  type: "Blossoms are nice",
  name: "Cherry",
  lastWatered: "2023-01-20",
  wateringInterval: 60,
};
const plant4 = {
  id: "4",
  type: "GIMME THAT",
  name: "Money Tree",
  lastWatered: "2020-01-20",
  wateringInterval: 1000,
};

const plants = [plant3, plant4];

storiesOf("PlantList Component", module)
  .add("With multiple plants", () => <PlantList plants={plants} />)
  .add("With no plants", () => <PlantList />);
