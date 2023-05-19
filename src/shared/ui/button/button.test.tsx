import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "./button";

describe("Button", () => {
  it("Button should respects block prop", () => {
    const container = render(<Button block>Block</Button>);
    const button = container.getByRole("button");
    expect(button).toMatchSnapshot();
  });
});
