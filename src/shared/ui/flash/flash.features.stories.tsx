import type { Meta, StoryObj } from "@storybook/react";

import { Flash } from "@/shared/ui/flash";
import { Icon } from "@/shared/ui/icon";

import { Text } from "../typography";

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
    children: <Text>This is flash</Text>,
  },
};

export const Default: Story = {
  args: {
    variant: "default",
    children: <Text>This is flash</Text>,
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: <Text>This is flash</Text>,
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: <Text>This is flash</Text>,
  },
};
