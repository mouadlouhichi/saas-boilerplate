import type { Meta, StoryObj } from "@storybook/react";

import SwitchDarkMode from "./index";

const meta: Meta<typeof SwitchDarkMode> = {
  title: "SwitchDarkMode",
  component: SwitchDarkMode,
  args: {
    className: "",
    size: "md"
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" }
    },
    className: {
      control: { type: "text" }
    },
    type: {
      options: ["icon", "toggle"],
      control: { type: "select" }
    }
  }
};

type Story = StoryObj<typeof SwitchDarkMode>;

export const Default: Story = {
  render: (args) => <SwitchDarkMode {...args} />
};

export default meta;
