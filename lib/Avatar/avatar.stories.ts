import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    src: 'https://the-faya.vercel.app/_next/image?url=https%3A%2F%2Fyunga-storage.s3.eu-north-1.amazonaws.com%2Faa.jpg&w=750&q=75',
    rounded: true,
    bri: true,
    label: "1",
  }
}