import type { Meta, StoryObj } from "@storybook/react";

import { NavLink } from "./nav-link";

const meta: Meta<typeof NavLink> = {
  title: "Components/Link/Features",
  tags: ["autodocs"],
  component: NavLink,
};

export default meta;
type Story = StoryObj<typeof NavLink>;

const href = "https://example.com";

export const Default: Story = {
  args: {
    to: href,
    children: "Default",
  },
};

export const Muted: Story = {
  args: {
    to: href,
    muted: true,
    children: "Muted",
  },
};

export const Underline: Story = {
  args: {
    to: href,
    underline: true,
    children: "Underline",
  },
};
