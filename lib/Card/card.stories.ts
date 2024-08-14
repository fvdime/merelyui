import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Apple Vision Pro",
    subtitle: "Lorem ipsum dolor sit amet",
    description: "From $3,567",
    label: "Buy Now",
    src: "https://plus.unsplash.com/premium_photo-1723200797471-bf9b048fe2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D",
    badge: "New",
  },
};