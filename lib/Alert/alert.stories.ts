import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './alert'

const meta: Meta<typeof Alert> = {
  component: Alert,
}

export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    title: "Allow Cookies",
    content: " We use cookies. By tapping 'accept,' you consent to the use of these methods by us and third parties.",
    info: true,
    dismissible: true
  }
}