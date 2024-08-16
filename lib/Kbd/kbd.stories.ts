import type { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "./kbd";

const meta: Meta<typeof Kbd> = {
  component: Kbd,
};

export default meta;

type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  args: {
    children: "CtrlK"
  },
};