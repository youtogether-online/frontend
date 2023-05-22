import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Title } from "./title";

describe("Title", () => {
  it("Title respects order prop", () => {
    const container = render(<Title order={1}>Heading 1</Title>);
    const title = container.getByRole("heading");
    expect(title).toMatchSnapshot();
  });
});
