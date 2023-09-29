import type { Meta, StoryObj } from "@storybook/react";

import Footer from "./index";

const meta: Meta<typeof Footer> = {
  title: "Footer",
  component: Footer,
  args: {}
};

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: (args) => <Footer {...args} />
};

export default meta;
