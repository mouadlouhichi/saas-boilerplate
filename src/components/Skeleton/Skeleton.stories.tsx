import type { Meta, StoryObj } from "@storybook/react";

import Skeleton from "./index";

const meta: Meta<typeof Skeleton> = {
  title: "Skeleton",
  component: Skeleton,
  args: {
    className: "",
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

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: (args) => <Skeleton {...args} />
};

export default meta;
