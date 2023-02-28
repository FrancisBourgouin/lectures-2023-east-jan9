import Result from "../Result";
import { render } from "@testing-library/react";

describe("Result Component", () => {
  it("shows a waiting message", () => {
    // ...

    const { queryByText } = render(<Result />);

    const messageH2 = queryByText("Waiting for your choice !");

    expect(messageH2).toBeInTheDocument();
  });
  it("shows the proper result message", () => {
    const { queryByText } = render(<Result result="Skynet was defeated once again." />);

    const messageH2 = queryByText("Skynet was defeated once again.");

    expect(messageH2).toBeInTheDocument();
  });
});
