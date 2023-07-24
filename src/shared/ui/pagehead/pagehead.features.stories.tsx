import type { Meta, StoryObj } from "@storybook/react";

import { PageHead } from "@/shared/ui/pagehead";

const meta: Meta<typeof PageHead> = {
  title: "Components/PageHead/Features",
  tags: ["autodocs"],
  component: PageHead,
};

export default meta;
type Story = StoryObj<typeof PageHead>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Pagehead",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "PageHead",
  },
};
