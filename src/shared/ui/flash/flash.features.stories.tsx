import type { Meta, StoryObj } from "@storybook/react";

import { Flash } from "@/shared/ui/flash";

const meta: Meta<typeof Flash> = {
  title: "Components/Flashs/Features",
  tags: ["autodocs"],
  component: Flash,
};

export default meta;
type Story = StoryObj<typeof Flash>;

export const Block: Story = {
  args: {
    block: true,
    children: <p>This is flash</p>,
  },
};

export const Default: Story = {
  args: {
    variant: "default",
    children: <p>This is flash</p>,
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: <p>This is flash</p>,
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: <p>This is flash</p>,
  },
};
