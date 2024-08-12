import type { Meta, StoryObj } from "@storybook/react";
import { Masonry } from "./masonry";

const meta: Meta<typeof Masonry> = {
  component: Masonry,
};

export default meta;

type Story = StoryObj<typeof Masonry>;

export const Default: Story = {
  args: {
    data: [
      { href: '#', src: "https://the-faya.vercel.app/_next/image?url=https%3A%2F%2Fyunga-storage.s3.eu-north-1.amazonaws.com%2F1ec789d4-fb9d-4bd5-b26a-290478e39d3cacc.jpg&w=750&q=75"},
      { href: '#', src: "https://the-faya.vercel.app/_next/image?url=https%3A%2F%2Fyunga-storage.s3.eu-north-1.amazonaws.com%2Ff2575767-7c86-459a-80ea-f2a35d83d75ble.jpg&w=1920&q=75"},
      { href: '#', src: "https://the-faya.vercel.app/_next/image?url=https%3A%2F%2Fyunga-storage.s3.eu-north-1.amazonaws.com%2F5cd21361-d0d9-4b17-b28b-dad2ac04d5b4ae.jpg&w=640&q=75"},
      { href: '#', src: "https://the-faya.vercel.app/_next/image?url=https%3A%2F%2Fyunga-storage.s3.eu-north-1.amazonaws.com%2Fa7afad78-fa69-4cb4-bfdf-f1f5ef057cf2aa.jpg&w=640&q=75"},
      { href: '#', src: "https://the-faya.vercel.app/_next/image?url=https%3A%2F%2Fyunga-storage.s3.eu-north-1.amazonaws.com%2Fee06ae09-9e23-4ab4-81e6-d774724ded79ac.jpg&w=640&q=75"},
      { href: '#', src: "https://the-faya.vercel.app/_next/image?url=https%3A%2F%2Fyunga-storage.s3.eu-north-1.amazonaws.com%2F078c5933-31a4-4c4a-a92c-f378f98da1c2abc.jpg&w=640&q=75"},
      { href: '#', src: "https://the-faya.vercel.app/_next/image?url=https%3A%2F%2Fyunga-storage.s3.eu-north-1.amazonaws.com%2Fb2a26c57-f2ad-4357-83e1-2f8c67fd600aan.jpg&w=1920&q=75"},
      { href: '#', src: "https://the-faya.vercel.app/_next/image?url=https%3A%2F%2Fyunga-storage.s3.eu-north-1.amazonaws.com%2F1ec789d4-fb9d-4bd5-b26a-290478e39d3cacc.jpg&w=750&q=75"},
    ],
  },
};
