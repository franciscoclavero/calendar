import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import DayWeekColumn from ".";

describe("Day Week Column ", () => {
  it("- Day Week Render", () => {
    const { container } = render(
      <Provider store={store}> 
        <DayWeekColumn dayWeek="Segunda"/>
      </Provider>
    );

    const dayWeekNode = screen.getByText('Segunda');

    expect(dayWeekNode).toBeInTheDocument;
  });
});