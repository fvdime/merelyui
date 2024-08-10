import type { Meta, StoryObj } from '@storybook/react'
import { Carousel } from './carousel'

const meta: Meta<typeof Carousel> = {
  component: Carousel,
}

export default meta

type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  args: {
    data: [
      { title: "Business", subtitle: "This is the business subtitle.", src: "https://i.pinimg.com/236x/74/78/dd/7478dd752b2c95d2c53d6fc521b79c64.jpg" },
      { title: "Research", subtitle: "This is the research subtitle.", src: "https://i.pinimg.com/236x/d8/11/d6/d811d60c9bea0ae96d47857d44be4da0.jpg" },
      { title: "Enterprise", subtitle: "This is the enterprise subtitle.", src: "https://i.pinimg.com/474x/76/b0/a7/76b0a7c6572859cecdd18e558da2dde5.jpg" },
    ],
  },
};