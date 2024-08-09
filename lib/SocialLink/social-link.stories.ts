import type { Meta, StoryObj } from '@storybook/react'
import { SocialLink } from './social-link'

const meta: Meta<typeof SocialLink> = {
  component: SocialLink,
}

export default meta

type Story = StoryObj<typeof SocialLink>

export const Default: Story = {
  args: {
    social: "Github",
    href: "https://github.com/fvdime"
  }
}