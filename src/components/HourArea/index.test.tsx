import { render, screen } from "@testing-library/react";
import HourArea from ".";

describe("Component Hour Area", () => {
  beforeEach(() => {
    render(<HourArea hour="00:30" />);
  });

  it("Render Hour", () => {
    const displayScreen = screen.getByText('00:30');

    expect(displayScreen).toBeInTheDocument();
  });
});
