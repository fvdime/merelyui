import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from './textarea'

const meta: Meta<typeof TextArea> = {
  component: TextArea,
}

export default meta

type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: {
    placeholder: "Type Here",
    fullWidth: true,
    htmlFor: "Message"
  }
}