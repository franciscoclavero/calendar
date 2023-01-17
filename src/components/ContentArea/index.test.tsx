import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import ContentArea from ".";

describe("Content Area", () => {
  it("- Render", () => {
    const { container } = render(
      <Provider store={store}>
      <ContentArea dayWeek="Sábado"/>
      </Provider>
      );

    const contentAreaNode = screen.findByText('Sábado');

    expect(contentAreaNode).toBeInTheDocument;
  });
});