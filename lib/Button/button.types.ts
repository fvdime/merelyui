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
  theme?: string;
}

interface NonDisabledButton extends ButtonBase {
  onClick?: () => void;
  disabled?: false;
}

interface DisabledButton extends ButtonBase {
  disabled: true;
  onClick?: never;
}

type Button = NonDisabledButton | DisabledButton;

export type ButtonProps = AdjustSizeProps<Button>;
