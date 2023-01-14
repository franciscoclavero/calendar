import { render, screen } from "@testing-library/react";
import DescriptionArea from ".";

describe("Description Area", () => {
  it("Description Area Render", () => {
    const { container } = render(<DescriptionArea />);

    const descriptionAreaNode = container.getElementsByClassName('body');

    expect(descriptionAreaNode.length).toBe(1);
  });
});
