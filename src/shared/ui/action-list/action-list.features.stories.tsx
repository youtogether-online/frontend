import type { Meta, StoryObj } from "@storybook/react";

import { ActionList } from "@/shared/ui/action-list";

const meta: Meta<typeof ActionList> = {
  title: "Components/ActionList/Features",
  tags: ["autodocs"],
  component: ActionList,
};

export default meta;
type Story = StoryObj<typeof ActionList>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ActionList.Group title="File group">
          <ActionList.Item>New File</ActionList.Item>
        </ActionList.Group>
      </>
    ),
  },
};
