import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ToogleButton from ".";
import { store } from "../../redux/store";

describe("Toogle Button ", () =>{
  it("- Render", () => {
    const { container } = render(
      <Provider store={store}>
        <ToogleButton />
      </Provider>
    );

    const buttonNode = screen.getByText('Theme light');

    expect(buttonNode).toBeInTheDocument;
  });
  it("- Click", () => {
    const { container } = render(
      <Provider store={store}>
        <ToogleButton />
      </Provider>
    );
    const mockLogout = jest.fn();
    
    const buttonNode = screen.getByText("Theme light");
    fireEvent.click(buttonNode);
    
    expect(buttonNode.textContent).toBe('Theme dark');
  })
});