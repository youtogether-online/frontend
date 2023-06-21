import type { Meta, StoryObj } from "@storybook/react";
import { tw } from "typewind";

import { Blankslate } from "@/shared/ui/blankslate";
import { Button } from "@/shared/ui/button";

import { NavLink } from "../nav-link";

const meta: Meta<typeof Blankslate> = {
  title: "Components/Blankslate/Features",
  tags: ["autodocs"],
  component: Blankslate,
};

export default meta;
type Story = StoryObj<typeof Blankslate>;

export const Default: Story = {
  args: {
    children: (
      <div className={tw.h_screen.w_screen.flex.items_center.justify_center}>
        <Blankslate>
          <Blankslate.Heading>This is a blank slate</Blankslate.Heading>
          <Blankslate.Description>Blank slate</Blankslate.Description>
          <Blankslate.Action>
            <Button variant="primary">Main action</Button>
          </Blankslate.Action>
          <Blankslate.Action>
            <NavLink to="http://example.com">Learn more</NavLink>
          </Blankslate.Action>
        </Blankslate>
      </div>
    ),
  },
};
