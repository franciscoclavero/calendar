import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import HourArea from ".";

describe("Component Hour Area", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <HourArea hour="00:30" onClick={() => {}}/>
      </Provider>
    );
  });

  it("Render Hour", () => {
    const displayScreen = screen.getByText('00:30');

    expect(displayScreen).toBeInTheDocument();
  });
});
