import { determineWinner, pickOppositeChoice, pickRandomChoice } from "./gameHelpers";

// 🗿-🪓-🌳
describe("Pick Opposite Choice", () => {
  it("should pick the proper opposite choice when given the player option", () => {
    const winningPairs = [
      ["🗿", "🌳"],
      ["🌳", "🪓"],
      ["🪓", "🗿"],
    ];

    for (const pair of winningPairs) {
      const playerChoice = pair[0];
      const expectedResult = pair[1];

      const result = pickOppositeChoice(playerChoice);

      expect(result).toEqual(expectedResult);
    }
  });
  it("should return an error if the given option is not valid", () => {
    const invalidElements = [null, undefined, 0, "🐔"];

    for (const element of invalidElements) {
      const playerChoice = element;

      const throwyFunction = () => pickOppositeChoice(playerChoice);

      expect(throwyFunction).toThrow("PICK A NICE OPTION YOU DUM DUM");
    }
  });
});
describe("Pick Random Choice", () => {
  it("should pick one of the three options", () => {
    const seedPairs = [
      [5, "🌳"],
      [6, "🪓"],
      [4, "🗿"],
    ];

    for (const seed of seedPairs) {
      const seedValue = seed[0];
      const expectedResult = seed[1];

      const result = pickRandomChoice(seedValue);

      expect(result).toEqual(expectedResult);
    }
  });
});
describe("Determine Winner", () => {
  it("should say that the player won if the matchup is in the player favor", () => {
    const playerWinningPairs = [
      ["🌳", "🗿"],
      ["🪓", "🌳"],
      ["🗿", "🪓"],
    ];

    for (const playerWinning of playerWinningPairs) {
      const playerChoice = playerWinning[0];
      const computerChoice = playerWinning[1];

      const expectedResult = "Skynet was defeated once again.";

      const result = determineWinner(playerChoice, computerChoice);

      expect(result).toEqual(expectedResult);
    }
  });
  it("should say that the computer won if the matchup is in the computer favor", () => {
    const computerWinningPairs = [
      ["🗿", "🌳"],
      ["🌳", "🪓"],
      ["🪓", "🗿"],
    ];

    for (const playerWinning of computerWinningPairs) {
      const playerChoice = playerWinning[0];
      const computerChoice = playerWinning[1];

      const expectedResult = "Welcome your new ROBOT OVERLORDS MWAHAHAHA";

      const result = determineWinner(playerChoice, computerChoice);

      expect(result).toEqual(expectedResult);
    }
  });
  it("should say that there is a tie if the matchup is the same", () => {
    const options = ["🪓", "🗿", "🌳"];

    for (const option of options) {
      const playerChoice = option;
      const computerChoice = option;

      const expectedResult = "Try again, and do better!";

      const result = determineWinner(playerChoice, computerChoice);

      expect(result).toEqual(expectedResult);
    }
  });
});
