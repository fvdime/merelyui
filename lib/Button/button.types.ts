import React from "react";
import { AdjustSizeProps } from "../utils/adjust-size";
interface ButtonBase {
  children: React.ReactNode;
  id?: string;
  fullWidth?: boolean;
  rounded?: boolean;
  small?: boolean;
  large?: boolean;
  style?: string;
}

interface NonDisabledButton extends ButtonBase {
  onClick?: () => void;
  disabled?: false;
  outline?: boolean;
}

interface DisabledButton extends ButtonBase {
  disabled: true;
  onClick?: never;
  outline?: never;
}

type Button = NonDisabledButton | DisabledButton;

export type ButtonProps = AdjustSizeProps<Button>;
