import { storiesOf } from "@storybook/react";
import Header from "../components/Header";

storiesOf("Header component", module)
  .add("When there is multiple plants", () => <Header amountOfPlants={5} />)
  .add("When there is one plant", () => <Header amountOfPlants={1} />)
  .add("When there is no plants", () => <Header amountOfPlants={0} />);
