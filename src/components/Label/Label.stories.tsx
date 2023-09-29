import type { Meta, StoryObj } from "@storybook/react";

import Label from "./index";

const meta: Meta<typeof Label> = {
  title: "Label",
  component: Label,
  args: {}
};

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (args) => <Label {...args} />
};

export default meta;
