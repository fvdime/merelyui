import type { Meta, StoryObj } from '@storybook/react'
import { IconInput } from './icon-input'

const meta: Meta<typeof IconInput> = {
  component: IconInput,
}

export default meta

type Story = StoryObj<typeof IconInput>

export const Default: Story = {
  args: {
    placeholder: "Type Here",
    email: true
  }
}