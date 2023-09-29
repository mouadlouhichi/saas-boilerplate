import type { Meta, StoryObj } from "@storybook/react";

import Input from "./index";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  args: {
    className: "",
    intent: "primary"
  },
  argTypes: {
    intent: {
      options: ["primary"],
      control: { type: "select" }
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" }
    },
    className: {
      control: { type: "text" }
    }
  }
};

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input {...args} />
};

export default meta;
