import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    className: "",
    intent: "circle",
    underline: false,
    children: "Button",
    size: "md",
    colorStyle: "primary"
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary", "circle"],
      control: { type: "select" }
    },
    size: {
      options: ["sm", "lg", "md"],
      control: { type: "select" }
    },
    disabled: {
      control: { type: "boolean" }
    },
    fontSize: {
      options: ["normal", "big", "bold"],
      control: { type: "select" }
    },
    colorStyle: {
      options: ["primary", "secondary"],
      control: { type: "select" }
    },
    className: {
      control: { type: "text" }
    }
  }
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args} />
};

export default meta;
