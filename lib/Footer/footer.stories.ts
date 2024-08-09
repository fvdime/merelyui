import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './footer'

const meta: Meta<typeof Footer> = {
  component: Footer,
}

export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {
    footerData: [
      {
        logo: "MerelyUI",
        content: "React UI component library. Open-Source, free, customizable.",
        image: "https://the-faya.vercel.app/_next/image?url=https%3A%2F%2Fyunga-storage.s3.eu-north-1.amazonaws.com%2F1ec789d4-fb9d-4bd5-b26a-290478e39d3cacc.jpg&w=750&q=75",
        href: "/",
        links: [
          {
            id: 1,
            label: "Company",
            href: "#",
            links: [
              { name: "About Us", href: "#" },
              { name: "Contact", href: "#" },
              { name: "FAQs", href: "#" },
            ],
          },
          {
            id: 2,
            label: "Services",
            href: "#",
            links: [
              { name: "Branding", href: "#" },
              { name: "Blog", href: "#" },
              { name: "Design", href: "#" },
            ],
          },
          {
            id: 3,
            label: "Legal",
            href: "#",
            links: [
              { name: "Terms", href: "#" },
              { name: "Privacy Policy", href: "#" },
              { name: "Cookie Policy", href: "#" },
            ],
          },
        ],
        socials: [
          { social: "Github", href: "#" },
          { social: "LinkedIn", href: "#" },
          { social: "Youtube", href: "#" },
          { social: "Discord", href: "#" },
        ],
      },
    ],
  },
}