import type { Meta, StoryObj } from "@storybook/react";

import NcInputNumber from "./NcInputNumber";

const meta: Meta<typeof NcInputNumber> = {
  title: "NcInputNumber",
  component: NcInputNumber,
  args: {}
};

type Story = StoryObj<typeof NcInputNumber>;

export const Default: Story = {
  render: (args) => <NcInputNumber {...args} />
};

export default meta;
