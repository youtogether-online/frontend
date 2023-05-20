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
      <Text as="p" variant="primary">
        Primary
      </Text>
      <Text as="p" variant="secondary">
        Secondary
      </Text>
      <Text as="p" variant="danger">
        Danger
      </Text>
    </>
  ),
};

export const Components: Story = {
  render: () => (
    <div className="flex flex-col">
      <Text as="p">Parapgraph</Text>
      <Text as="kbd">Kbd</Text>
      <Text as="span">Span</Text>
      <Text as="em">Italized</Text>
      <Text as="small">Small</Text>
      <Text as="strong">Strong</Text>
      <Text as="u">Misspeled</Text>
    </div>
  ),
};
