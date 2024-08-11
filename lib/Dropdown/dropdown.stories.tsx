import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./dropdown";
import { useRef } from "react";
import { DropdownHandle, DropdownProps } from "./dropdown.types";

const DropdownWithRef = (props: DropdownProps) => {
  const dropdownRef = useRef<DropdownHandle>(null);

  return <Dropdown ref={dropdownRef} {...props} />;
};

const meta: Meta<typeof DropdownWithRef> = {
  component: DropdownWithRef,
};

export default meta;

type Story = StoryObj<DropdownProps>;

export const Default: Story = {
  args: {
    header: <h3>Modal Header</h3>,
    body: <p>This is the body content of the second modal.</p>,
    label: "Modal",
  },
};
