import { render, screen } from "@testing-library/react";
import HeaderCell from ".";

describe("Header Cell: ", () => {
  it("Header Cell render", () => {
    const { container } = render(<HeaderCell title="teste"/>);

    const headerCellNode = screen.getByText('teste');

    expect(headerCellNode).toBeInTheDocument();
  });
});
