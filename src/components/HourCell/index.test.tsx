import { render, screen } from "@testing-library/react";
import HourCell from ".";

describe("Hour Cell", () => {
  beforeEach(() => {
    render(<HourCell hour="00:30"/>)
  });
  
  it("Hour Cell render", () => {
    const hourCellText = screen.getByText('00:30');

    expect(hourCellText).toBeInTheDocument;
  });
});
