import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Components/Typography/Title/Features",
  tags: ["autodocs"],
  component: Title,
};

export default meta;
type Story = StoryObj<typeof Title>;

export const H1: Story = {
  args: {
    order: 1,
    children: "Heading 1",
  },
};

export const H2: Story = {
  args: {
    order: 2,
    children: "Heading 2",
  },
};

export const H3: Story = {
  args: {
    order: 3,
    children: "Heading 3",
  },
};

export const H4: Story = {
  args: {
    order: 4,
    children: "Heading 4",
  },
};

export const H5: Story = {
  args: {
    order: 5,
    children: "Heading 5",
  },
};

export const H6: Story = {
  args: {
    order: 6,
    children: "Heading 6",
  },
};
