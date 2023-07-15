import type { Meta, StoryObj } from "@storybook/react";
import { tw } from "typewind";

import { ActionList } from "@/shared/ui/action-list";

import { NavLink } from "../nav-link";

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
          <ActionList.Item>
            New File<ActionList.Description>Create new file</ActionList.Description>
          </ActionList.Item>
          <ActionList.Item>
            <NavLink to="https://google.com/" sx={tw.w_full.block}>
              Edit file
            </NavLink>
          </ActionList.Item>
          <ActionList.Divider />
          <ActionList.Item variant="danger">Delete file</ActionList.Item>
        </ActionList.Group>
      </>
    ),
  },
};
