import type { Meta, StoryObj } from "@storybook/react";

import { ActionList } from "@/shared/ui/action-list";

import { Icon } from "../icon";

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
        <ActionList.Group title="File group" auxiliaryText="Change your files">
          <ActionList.Item disabled>
            <ActionList.LeadingVisual>
              <Icon name="arrows/arrow-left" />
            </ActionList.LeadingVisual>
            New File
            <ActionList.Description>Create new file</ActionList.Description>
            <ActionList.TrailingVisual>
              <Icon name="abstract/cross" />
            </ActionList.TrailingVisual>
          </ActionList.Item>
          <ActionList.LinkItem to="https://google.com/edit-file" active>
            <ActionList.LeadingVisual>
              <Icon name="abstract/cross" />
            </ActionList.LeadingVisual>
            Edit file
            <ActionList.Description variant="block">Edit file in new tab</ActionList.Description>
          </ActionList.LinkItem>
          <ActionList.Divider />
          <ActionList.Item variant="danger">
            <ActionList.LeadingVisual>
              <Icon name="abstract/cross" />
            </ActionList.LeadingVisual>
            Delete file
          </ActionList.Item>
        </ActionList.Group>
      </>
    ),
  },
};

export const InlineDescription: Story = {
  args: {
    children: (
      <>
        <ActionList.Group title="File group">
          <ActionList.Item>
            New File
            <ActionList.Description variant="inline">Create new file</ActionList.Description>
          </ActionList.Item>
          <ActionList.LinkItem to="https://google.com/" sx="w-full block">
            Edit file
          </ActionList.LinkItem>
          <ActionList.Divider />
          <ActionList.Item variant="danger">Delete file</ActionList.Item>
        </ActionList.Group>
      </>
    ),
  },
};

export const BlockDescription: Story = {
  args: {
    children: (
      <>
        <ActionList.Group title="File group">
          <ActionList.Item>
            New File<ActionList.Description variant="block">Create new file</ActionList.Description>
          </ActionList.Item>
          <ActionList.LinkItem to="https://google.com/" sx="w-full block">
            Edit file
          </ActionList.LinkItem>
          <ActionList.Divider />
          <ActionList.Item variant="danger">Delete file</ActionList.Item>
        </ActionList.Group>
      </>
    ),
  },
};
