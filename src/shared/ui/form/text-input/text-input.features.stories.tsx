import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@/shared/ui/icon";

import { TextInput } from "./index";

const meta: Meta<typeof TextInput> = {
  title: "Components/Form/TextInput/Features",
  tags: ["autodocs"],
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    placeholder: "input"
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    placeholder: "input",
  }
}

export const Medium: Story = {
  args: {
    placeholder: "input",
    size: "md"
  }
}

export const Large: Story = {
  args: {
    placeholder: "input",
    size: "lg"
  }
}

export const Success: Story = {
  args: {
    placeholder: "input",
    validationStatus: "success"
  }
}

export const Warning: Story = {
  args: {
    placeholder: "input",
    validationStatus: "warning"
  }
}

export const Error: Story = {
  args: {
    placeholder: "input",
    validationStatus: "error"
  }
}

export const Block: Story = {
  args: {
    placeholder: "input",
    block: true
  }
}

export const Loading: Story = {
  args: {
    placeholder: "input",
    loading: true,
    trailingAction: <TextInput.Action aria-label="Clear input" onClick={() => alert('click')} icon="common/cross"></TextInput.Action>
  }
}

export const TrailingVisual: Story = {
  args: {
    placeholder: "input",
    trailingVisual: <Icon name="common/arrowLeft" />
  }
}

export const LeadingVisual: Story = {
  args: {
    placeholder: "input",
    leadingVisual: <Icon name="common/arrowLeft" />,
    value: "God, bless JQuery!"
  }
}

export const TrailingAction: Story = {
  args: {
    placeholder: "input",
    trailingAction: <TextInput.Action aria-label="Clear input" onClick={() => alert('click')} icon="common/cross"></TextInput.Action>
  }
}
