import type { Meta, StoryObj } from '@storybook/react'
import { Drawer } from './drawer'

const meta: Meta<typeof Drawer> = {
  component: Drawer,
}

export default meta

type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  args: {
    position: "top",
    label: "open",
    children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat consequuntur, dolor fugiat voluptates rerum, iusto est cum dolores, iste et quasi nobis libero unde. Eveniet tempore nobis delectus ipsam fuga."
  },
};