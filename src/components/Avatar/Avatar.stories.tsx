import defaultUser from "@/images/avatars/user.png";
import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "./index";

const meta: Meta<typeof Avatar> = {
  title: "Avatar",
  component: Avatar,
  args: {
    radius: "",
    imgUrl: defaultUser,
    userName: "John Doe",
    hasChecked: false,
    intent: "primary",
    size: "md",
    className: "",
    borderRadius: "rounded-full",
    hasCheckedClass: "w-4 h-4 -top-0.5 -right-0.5"
  },
  argTypes: {
    radius: {
      control: { type: "text" }
    },
    imgUrl: {
      control: { type: "text" }
    },
    userName: {
      control: { type: "text" }
    },
    hasChecked: {
      control: { type: "boolean" }
    },
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
    },
    borderRadius: {
      options: ["rounded-full", "rounded-md", "rounded-lg"],
      control: { type: "select" }
    },
    hasCheckedClass: {
      control: { type: "text" }
    }
  }
};

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: (args) => <Avatar {...args} />
};

export default meta;
