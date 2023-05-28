import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Text } from "./text";

describe("Title", () => {
  it("Title respects order prop", () => {
    const container = render(<Text>Default text</Text>);
  });
});
