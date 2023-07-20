import type { Meta, StoryObj } from "@storybook/react";

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
      <div className={"h-screen w-screen flex items-center justify-center"}>
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
