import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./link";

const meta: Meta<typeof Link> = {
  title: "Components/Link/Features",
  tags: ["autodocs"],
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;

const href = "https://example.com";

export const Default: Story = {
  args: {
    href,
    children: "Default",
  },
};

export const Muted: Story = {
  args: {
    href,
    muted: true,
    children: "Muted",
  },
};

export const Underline: Story = {
  args: {
    href,
    underline: true,
    children: "Underline",
  },
};
