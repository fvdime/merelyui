import type { Meta, StoryObj } from '@storybook/react'
import { CardCarousel } from './card-carousel'

const meta: Meta<typeof CardCarousel> = {
  component: CardCarousel,
}

export default meta

type Story = StoryObj<typeof CardCarousel>

export const Default: Story = {
  args: {
    data: [
      { title: "Business", src: "https://i.pinimg.com/236x/74/78/dd/7478dd752b2c95d2c53d6fc521b79c64.jpg", color: 'bright' },
      { src: "https://i.pinimg.com/236x/d8/11/d6/d811d60c9bea0ae96d47857d44be4da0.jpg", color: 'dark' },
      { title: "dfssdfsdf", subtitle: "Empower your business with AI", src: "https://i.pinimg.com/474x/76/b0/a7/76b0a7c6572859cecdd18e558da2dde5.jpg", color: 'dark'},
      { title: "Business", subtitle: "Empower your business with AI", src: "https://i.pinimg.com/236x/74/78/dd/7478dd752b2c95d2c53d6fc521b79c64.jpg", color: 'bright'},
      { title: "sssssss", subtitle: "Empower your business with AI", src: "https://i.pinimg.com/236x/d8/11/d6/d811d60c9bea0ae96d47857d44be4da0.jpg", color: 'dark'},
      { title: "dfssdfsdf", subtitle: "Empower your business with AI", src: "https://i.pinimg.com/474x/76/b0/a7/76b0a7c6572859cecdd18e558da2dde5.jpg", color: 'bright'},
      { title: "Business", subtitle: "Empower your business with AI", src: "https://i.pinimg.com/236x/74/78/dd/7478dd752b2c95d2c53d6fc521b79c64.jpg", color: 'bright'},
      { title: "sssssss", subtitle: "Empower your business with AI", src: "https://i.pinimg.com/236x/d8/11/d6/d811d60c9bea0ae96d47857d44be4da0.jpg", color: 'bright'},
      { title: "dfssdfsdf", subtitle: "Empower your business with AI", src: "https://i.pinimg.com/474x/76/b0/a7/76b0a7c6572859cecdd18e558da2dde5.jpg", color: 'bright'},
    ],
  },
};