import { type Meta, type StoryObj } from "@storybook/react";

import { Icon } from "../icon";
import { IconButton } from "./icon-button";

const meta: Meta<typeof IconButton> = {
  title: "Components/Buttons/IconButton/Features",
  tags: ["autodocs"],
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    variant: "primary",
    icon: <Icon name="logos/youtogether-vertical" />,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    icon: <Icon name="logos/youtogether-vertical" />,
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    icon: <Icon name="logos/youtogether-vertical" />,
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    icon: <Icon name="logos/youtogether-vertical" />,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    icon: <Icon name="logos/youtogether-vertical" />,
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    icon: <Icon name="logos/youtogether-vertical" />,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    icon: <Icon name="logos/youtogether-vertical" />,
  },
};
