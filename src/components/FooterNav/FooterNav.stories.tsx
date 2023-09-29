import type { Meta, StoryObj } from "@storybook/react";

import FooterNav from "./FooterNav";

const meta: Meta<typeof FooterNav> = {
  title: "FooterNav",
  component: FooterNav,
  args: {}
};

type Story = StoryObj<typeof FooterNav>;

export const Default: Story = {
  render: (args: any) => <FooterNav {...args} />
};

export default meta;
