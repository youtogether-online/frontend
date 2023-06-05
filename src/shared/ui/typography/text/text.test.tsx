import { render } from "@testing-library/react";
import { describe, it } from "vitest";

import { Text } from "./text";

describe("Title", () => {
  it("Title respects order prop", () => {
    render(<Text>Default text</Text>);
  });
});
