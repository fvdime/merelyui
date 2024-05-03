import type { Meta, StoryObj } from '@storybook/react'
import { IconTextArea } from './icon-textarea'

const meta: Meta<typeof IconTextArea> = {
  component: IconTextArea,
}

export default meta

type Story = StoryObj<typeof IconTextArea>

export const Default: Story = {
  args: {
    placeholder: "Type Here",
    email: true,
    fullWidth: true,
    htmlFor: "Message"
  }
}