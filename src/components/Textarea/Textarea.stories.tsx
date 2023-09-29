import type { Meta, StoryObj } from "@storybook/react";

import Textarea from "./index";

const meta: Meta<typeof Textarea> = {
  title: "Textarea",
  component: Textarea,
  args: {
    className: "",
    sizeType: "md",
    intent: "primary"
  },
  argTypes: {
    intent: {
      options: ["primary"],
      control: { type: "select" }
    },
    sizeType: {
      options: ["sm", "md", "lg"],
      control: { type: "select" }
    },
    className: {
      control: { type: "text" }
    }
  }
};

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: (args) => <Textarea {...args} />
};

export default meta;
