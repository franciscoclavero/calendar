import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import ModalHour from ".";

describe("Modal hour ", () => {
  it("- Render", () =>{
    const { container } = render(
      <Provider store={store}>
        <ModalHour onClick={() => {}}/>
      </Provider>
    );

    const modalNode = screen.getByText('Reservado por 1 Hora');

    expect(modalNode).toBeInTheDocument;
  });
});
