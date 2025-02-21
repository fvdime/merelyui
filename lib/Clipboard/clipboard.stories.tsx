import type { Meta, StoryObj } from "@storybook/react";
import { Clipboard } from "./clipboard";

const meta: Meta<typeof Clipboard> = {
  component: Clipboard,
};

export default meta;

type Story = StoryObj<typeof Clipboard>;

export const Default: Story = {
  args: {
    content: "npm install merelyui",
    children: (
      <h5 className="font-medium">
        <span className="text-amber-300 me-1">npm</span>install merelyui
      </h5>
    ),
  },
};
