import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './navbar'

const meta: Meta<typeof Navbar> = {
  component: Navbar,
}

export default meta

type Story = StoryObj<typeof Navbar>

export const Default: Story = {
  args: {
    navbarData: [
      {
        logo: "MerelyUI",
        image: "https://the-faya.vercel.app/_next/image?url=https%3A%2F%2Fyunga-storage.s3.eu-north-1.amazonaws.com%2F1ec789d4-fb9d-4bd5-b26a-290478e39d3cacc.jpg&w=750&q=75",
        href: "/",
        links: [
          { label: "About Us", href: "#" },
          { label: "Contact", href: "#" },
          { label: "Products", href: "#" },
          { label: "FAQs", href: "#" },

        ],
        button: [{ label: 'Get Started', onClick: (() => {}) }],
      },
    ],
  },
}