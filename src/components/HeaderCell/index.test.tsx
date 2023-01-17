import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import HeaderCell from ".";

describe("Header Cell: ", () => {
  it("Header Cell render", () => {
    const { container } = render(
      <Provider store={store}>
        <HeaderCell title="teste"/>
      </Provider>
    );

    const headerCellNode = screen.getByText('teste');

    expect(headerCellNode).toBeInTheDocument();
  });
});
