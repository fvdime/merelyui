import type { Meta, StoryObj } from "@storybook/react";
import { HeroBanner } from "./hero-banner";

const meta: Meta<typeof HeroBanner> = {
  component: HeroBanner,
};

export default meta;

type Story = StoryObj<typeof HeroBanner>;

export const Default: Story = {
  args: {
    data: {
      title: "Eloquent® is a brand that is helping express themselves to the world.",
      subtitle: "Welcome to Eloquent Studio®, where ideas rally around and creativity knows no bounds.",
      content: "We're more than just a website—we're a community of thinkers, dreamers, and doers united by our passion for sharing innovative ideas. Whether you're seeking new ideas, eager to explore new perspectives, or simply craving a dose of creativity, you've come to the right place. Join us on a journey of exploration and discovery as we dive into a world brimming with endless possibilities. Welcome aboard, and let's embark on this exhilarating adventure together.",
      src: "https://plus.unsplash.com/premium_photo-1723200797471-bf9b048fe2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D",
      button: [
        { label: "Get Started", href: "#" },
        { label: "Get Started", href: "#" }
      ],
      secondary: true,
      full: true
    }
  },
};