import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "@/shared/ui/select";

const meta: Meta<typeof Select> = {
  title: "Components/Select/Features",
  tags: ["autodocs"],
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => {
    return (
      <div className="w-64">
        <Select>
          <Select.Trigger placeholder="Default select" />
          <Select.Content>
            <Select.Group>
              <Select.Label>Select item</Select.Label>
              <Select.Item value="item-1">Item 1</Select.Item>
              <Select.Item value="item-2">Item 2</Select.Item>
              <Select.Item value="item-3">Item 3</Select.Item>
              <Select.Item value="item-4">Item 4</Select.Item>
              <Select.Item value="item-5">Item 5</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select>
      </div>
    );
  },
};

export const Popper: Story = {
  render: () => {
    return (
      <div className="w-64">
        <Select>
          <Select.Trigger placeholder="Default select" />
          <Select.Content position="popper">
            <Select.Group>
              <Select.Label>Select item</Select.Label>
              <Select.Item value="item-1">Item 1</Select.Item>
              <Select.Item value="item-2">Item 2</Select.Item>
              <Select.Item value="item-3">Item 3</Select.Item>
              <Select.Item value="item-4">Item 4</Select.Item>
              <Select.Item value="item-5">Item 5</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select>
      </div>
    );
  },
};

export const WithSeparator: Story = {
  render: () => {
    return (
      <div className="w-64">
        <Select>
          <Select.Trigger placeholder="Default select" />
          <Select.Content position="popper">
            <Select.Group>
              <Select.Label>Select item</Select.Label>
              <Select.Item value="item-1">Item 1</Select.Item>
              <Select.Separator />
              <Select.Item value="item-2">Item 2</Select.Item>
              <Select.Separator />
              <Select.Item value="item-3">Item 3</Select.Item>
              <Select.Separator />
              <Select.Item value="item-4">Item 4</Select.Item>
              <Select.Separator />
              <Select.Item value="item-5">Item 5</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select>
      </div>
    );
  },
};
