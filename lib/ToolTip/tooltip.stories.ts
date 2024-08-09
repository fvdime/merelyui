import type { Meta, StoryObj } from '@storybook/react'
import { ToolTip } from './tooltip'

const meta: Meta<typeof ToolTip> = {
  component: ToolTip,
}

export default meta

type Story = StoryObj<typeof ToolTip>

export const Default: Story = {
  args: {
    label: 'ToolTip',
    position: 'right',
    children: 'ToolTip Right'
  }
}