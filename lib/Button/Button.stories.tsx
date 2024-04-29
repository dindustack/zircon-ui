import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "secondary",
        "destructive",
        "ghost",
        "link",
        "outline",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["default", "icon", "sm", "lg"],
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click me!',
    variant: 'default'
  },
};
