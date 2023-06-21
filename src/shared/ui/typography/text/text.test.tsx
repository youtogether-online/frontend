import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Text } from "./text";

describe("Text", () => {
  it("Text respects order prop", () => {
    const container = render(<Text>Default text</Text>);
    const text = container.getByText("Default text");
    expect(text).toMatchSnapshot();
  });
});
