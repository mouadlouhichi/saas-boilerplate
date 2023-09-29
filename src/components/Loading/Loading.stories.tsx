import type { Meta, StoryObj } from "@storybook/react";

import Loading from "./index";

const meta: Meta<typeof Loading> = {
  title: "Loading",
  component: Loading,
  args: {
    className: "animate-spin -ml-1 mr-3",
    size: "md",
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

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  render: (args) => <Loading {...args} />
};

export default meta;
