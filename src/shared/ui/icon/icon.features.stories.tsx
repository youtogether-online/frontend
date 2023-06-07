import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon/Features",
  tags: ["autodocs"],
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: "logos/youtogether-vertical",
  },
};
