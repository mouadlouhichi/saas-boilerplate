import type { Meta, StoryObj } from "@storybook/react";

import Radio from "./index";

const meta: Meta<typeof Radio> = {
  title: "Radio",
  component: Radio,
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

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: (args) => <Radio {...args} />
};

export default meta;
