import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@/shared/ui";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Buttons/Button/Features",
  tags: ["autodocs"],
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outline",
    children: "Outlined",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger",
  },
};

export const Invisible: Story = {
  args: {
    variant: "invisible",
    children: "Invisible",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const LeadingIcon: Story = {
  args: {
    leadingIcon: <Icon name="common/arrowLeft" />,
    children: "Leading icon",
  },
};

export const TrailingIcon: Story = {
  args: {
    trailingAction: <Icon name="common/arrowLeft" />,
    children: "Trailing Icon",
  },
};

export const TrailingAction: Story = {
  args: {
    trailingAction: <Icon name="common/arrowLeft" />,
    children: "Leading Action",
  },
};
