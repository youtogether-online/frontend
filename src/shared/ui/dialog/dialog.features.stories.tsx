import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button, IconButton } from "@/shared/ui/button";
import { Dialog } from "@/shared/ui/dialog";
import { Icon } from "@/shared/ui/icon";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog/Features",
  tags: ["autodocs"],
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild>
          <Button variant="primary">Open dialog</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Title</Dialog.Title>
            <Dialog.CloseButton asChild>
              <IconButton variant="invisible" icon={<Icon name="abstract/cross" />} />
            </Dialog.CloseButton>
          </Dialog.Header>
          <Dialog.Body>Body</Dialog.Body>
          <Dialog.Footer>
            <Dialog.CloseButton>
              <Button variant="danger">Close</Button>
            </Dialog.CloseButton>
            <Button
              variant="primary"
              onClick={() => {
                alert("God, bless JQuery!");
              }}
            >
              Submit
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    );
  },
};
