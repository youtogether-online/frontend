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
    icon: <Icon name="common/arrowLeft" />,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    icon: <Icon name="common/arrowLeft" />,
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    icon: <Icon name="common/arrowLeft" />,
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    icon: <Icon name="common/arrowLeft" />,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    icon: <Icon name="common/arrowLeft" />,
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    icon: <Icon name="common/arrowLeft" />,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    icon: <Icon name="common/arrowLeft" />,
  },
};
