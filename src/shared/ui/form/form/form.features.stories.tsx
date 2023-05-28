import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "@/shared/ui/form/form";

import { TextInput } from "../text-input";

const meta: Meta<typeof Form> = {
  title: "Components/Form/Form/Features",
  tags: ["autodocs"],
  component: Form,
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Form.Field name="login">
          <Form.Label>Email</Form.Label>
          <Form.Control asChild>
            <TextInput placeholder="email" />
          </Form.Control>
        </Form.Field>
      </>
    ),
  },
};

export const Required: Story = {
  args: {
    children: (
      <>
        <Form.Field name="login">
          <Form.Label required>Email</Form.Label>
          <Form.Control asChild>
            <TextInput placeholder="email" />
          </Form.Control>
        </Form.Field>
      </>
    ),
  },
};

export const Caption: Story = {
  args: {
    children: (
      <>
        <Form.Field name="login">
          <Form.Label>Email</Form.Label>
          <Form.Control asChild>
            <TextInput placeholder="email" />
          </Form.Control>
          <Form.Caption>your email</Form.Caption>
        </Form.Field>
      </>
    ),
  },
};

export const Success: Story = {
  args: {
    children: (
      <Form.Field name="login">
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control asChild>
          <TextInput id="email" />
        </Form.Control>
        <Form.Validation variant="success">Success</Form.Validation>
      </Form.Field>
    ),
  },
};

export const Warning: Story = {
  args: {
    children: (
      <Form.Field name="login">
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control asChild>
          <TextInput id="email" />
        </Form.Control>
        <Form.Validation variant="warning">Warning</Form.Validation>
      </Form.Field>
    ),
  },
};

export const Danger: Story = {
  args: {
    children: (
      <Form.Field name="login">
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control asChild>
          <TextInput id="email" />
        </Form.Control>
        <Form.Validation variant="error">Incorrect email</Form.Validation>
      </Form.Field>
    ),
  },
};

export const VisuallyHiddenLabel: Story = {
  args: {
    children: (
      <Form.Field name="login">
        <Form.Label visuallyHidden htmlFor="email">
          Email
        </Form.Label>
        <Form.Control asChild>
          <TextInput id="email" />
        </Form.Control>
      </Form.Field>
    ),
  },
};
