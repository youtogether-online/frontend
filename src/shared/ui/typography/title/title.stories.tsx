import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Components/Typography/Title/Features  ",
  component: Title,
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Orders: Story = {
  render: () => (
    <>
      <Title order={1}>H1</Title>
      <Title order={2}>H2</Title>
      <Title order={3}>H3</Title>
      <Title order={4}>H4</Title>
      <Title order={5}>H5</Title>
      <Title order={6}>H6</Title>
    </>
  ),
};
