import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "./button";

describe("Button", () => {
  it("Button should respects size prop", () => {
    const container = render(<Button size="sm">Small button</Button>);
    const button = container.getByRole("button");
    expect(button).toMatchSnapshot();
  });
});
