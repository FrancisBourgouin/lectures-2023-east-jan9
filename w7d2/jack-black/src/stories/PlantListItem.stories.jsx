import { storiesOf } from "@storybook/react";
import PlantListItem from "../components/PlantListItem";

const happyPlant = {
  id: "4",
  type: "GIMME THAT",
  name: "Money Tree",
  lastWatered: "2023-01-20",
  wateringInterval: 1000,
};
const sadPlant = {
  id: "4",
  type: "GIMME THAT",
  name: "Money Tree",
  lastWatered: "2020-01-20",
  wateringInterval: 1,
};

storiesOf("PlantListItem Component", module)
  .add("Well hydrated plant", () => <PlantListItem {...happyPlant} />)
  .add("Dehydrated plant", () => <PlantListItem {...sadPlant} />);
