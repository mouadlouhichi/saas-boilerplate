import type { Meta, StoryObj } from "@storybook/react";

import CustomRadio from "./index";

const meta: Meta<typeof CustomRadio> = {
  title: "CustomRadio",
  component: CustomRadio,
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

type Story = StoryObj<typeof CustomRadio>;

export const Default: Story = {
  render: (args) => <CustomRadio {...args} />
};

export default meta;
