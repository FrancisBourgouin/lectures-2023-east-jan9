import Game from "../Game";

import { render, fireEvent, waitForElement } from "@testing-library/react";

describe("Game flow (click on option, view result)", () => {
  it("should show the player and computer icons", () => {
    // ...
    const { queryByText, findByText, getByText } = render(<Game />);

    const computer = queryByText("🤖");
    const player = queryByText("👩‍💻");

    expect(computer).toBeInTheDocument();
    expect(player).toBeInTheDocument();
  });

  it("should display the proper message when an option is clicked", () => {
    const { queryByTestId, getByTestId, queryByText } = render(<Game />);

    const moaiButton = getByTestId("moai");

    fireEvent.click(moaiButton);

    const waitingMessage = queryByText("Waiting for your choice!");

    expect(waitingMessage).not.toBeInTheDocument();

    waitForElement(() => queryByText("Welcome your new ROBOT OVERLORDS MWAHAHAHA")).then(
      () => {
        const resultMessage = queryByText("Welcome your new ROBOT OVERLORDS MWAHAHAHA");
        expect(resultMessage).toBeInTheDocument();
      }
    );
  });
  it("should display the proper message when an option is clicked (async)", async () => {
    const { queryByTestId, getByTestId, queryByText } = render(<Game />);

    const moaiButton = getByTestId("moai");

    fireEvent.click(moaiButton);

    const waitingMessage = queryByText("Waiting for your choice!");

    expect(waitingMessage).not.toBeInTheDocument();

    await waitForElement(() => queryByText("Welcome your new ROBOT OVERLORDS MWAHAHAHA"));

    const resultMessage = queryByText("Welcome your new ROBOT OVERLORDS MWAHAHAHA");
    expect(resultMessage).toBeInTheDocument();
  });

  it("should update the class of the robot when clicked on", () => {
    const { queryByText } = render(<Game />);

    const computer = queryByText("🤖");

    expect(computer).toHaveClass("cheating");

    fireEvent.click(computer);

    expect(computer).not.toHaveClass("cheating");
  });
});
