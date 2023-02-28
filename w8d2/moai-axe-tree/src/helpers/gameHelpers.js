export const pickOppositeChoice = (playerChoice) => {
  const options = ["🪓", "🗿", "🌳"];

  // return options[(options.indexOf(playerChoice) + 1) % 3];

  const winningPairs = {
    "🗿": "🌳",
    "🌳": "🪓",
    "🪓": "🗿",
  };

  if (!options.includes(playerChoice)) {
    throw new Error("PICK A NICE OPTION YOU DUM DUM");
  }

  return winningPairs[playerChoice];
};

export const pickRandomChoice = (seed) => {
  const options = ["🪓", "🗿", "🌳"];

  const index = Math.floor(seed * 23031910 + 6) % 3;
  // ...

  return options[index];
};

export const determineWinner = (playerChoice, computerChoice) => {
  const winningPairs = {
    "🗿": "🌳",
    "🌳": "🪓",
    "🪓": "🗿",
  };

  if (playerChoice === computerChoice) {
    return "Try again, and do better!";
  }

  if (winningPairs[playerChoice] !== computerChoice) {
    return "Skynet was defeated once again.";
  }

  return "Welcome your new ROBOT OVERLORDS MWAHAHAHA";
  // ...
};

pickRandomChoice(Math.random());
