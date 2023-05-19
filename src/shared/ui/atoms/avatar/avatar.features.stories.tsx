import type { Meta, StoryObj } from "@storybook/react";

import { IconArrowLeft } from "../../icons";
import { Avatar } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar/Features",
  tags: ["autodocs"],
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Rounded: Story = {
  args: {
    square: false,
    src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    size: 128,
  },
};

export const Square: Story = {
  args: {
    square: true,
    src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    size: 128,
  },
};

export const Size: Story = {
  args: {
    size: 64,
    src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
};

export const Fallback: Story = {
  args: {
    size: 128,
    fallback: "RG",
    src: "https://example.com",
  },
};
