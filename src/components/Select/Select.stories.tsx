import type { Meta, StoryObj } from "@storybook/react";

import Select from "./index";

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
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

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => <Select {...args} />
};

export default meta;
