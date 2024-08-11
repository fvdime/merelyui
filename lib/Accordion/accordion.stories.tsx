import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./accordion";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    data: [
      {
        title: "Accordion Title",
        content: (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            amet iusto saepe voluptatum molestiae deserunt rerum adipisci illum
            minima, molestias facilis debitis modi voluptates iste! Maiores
            deleniti voluptate voluptas? Incidunt.
          </p>
        ),
      },
      {
        title: "Accordion Title 2",
        content: (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            eligendi corrupti quo iure repellat? Quod odio aliquid, laborum modi
            tenetur repellendus esse numquam, ullam, quo minima quis dolorem
            dolore reiciendis?
          </p>
        ),
      },
    ],
  },
};
