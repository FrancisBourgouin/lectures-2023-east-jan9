import { useState } from "react";
import {
  determineWinner,
  pickOppositeChoice,
  pickRandomChoice,
} from "../helpers/gameHelpers";
import Computer from "./Computer";
import Player from "./Player";
import Result from "./Result";

export default function Game(props) {
  const [result, setResult] = useState(null);
  const [isCheating, setIsCheating] = useState(true);

  const toggleCheating = () => setIsCheating(!isCheating);

  const chooseOption = (option) => {
    const player = option;
    const computer = isCheating
      ? pickOppositeChoice(option)
      : pickRandomChoice(Math.random());

    const newResult = determineWinner(player, computer);

    setTimeout(() => {
      setResult(newResult);
    }, 1000);
  };

  return (
    <div>
      <main className="game">
        <Computer isCheating={isCheating} toggleCheating={toggleCheating} />
        <Player chooseOption={chooseOption} />
      </main>
      <Result result={result} />
    </div>
  );
}
