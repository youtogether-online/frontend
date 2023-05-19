import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";

const meta: Meta<typeof Text> = {
  title: "Components/Typography/Text/Features",
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Variants: Story = {
  render: () => (
    <>
      <Text component="p" variant="primary">
        Primary
      </Text>
      <Text component="p" variant="secondary">
        Secondary
      </Text>
      <Text component="p" variant="danger">
        Danger
      </Text>
    </>
  ),
};

export const Components: Story = {
  render: () => (
    <div className="flex flex-col">
      <Text component="p">Parapgraph</Text>
      <Text component="kbd">Kbd</Text>
      <Text component="span">Span</Text>
      <Text component="em">Italized</Text>
      <Text component="small">Small</Text>
      <Text component="strong">Strong</Text>
      <Text component="u">Misspeled</Text>
    </div>
  ),
};
