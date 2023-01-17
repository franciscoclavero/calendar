import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import HourCell from ".";

describe("Hour Cell", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <HourCell dayWeek="dia" hour="00:30"/>
      </Provider>
    )
  });
  
  it("Hour Cell render", () => {
    const hourCellText = screen.getByText('00:30');

    expect(hourCellText).toBeInTheDocument;
  });
});
