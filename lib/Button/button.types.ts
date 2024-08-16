import React from "react";
interface ButtonBase {
  children: React.ReactNode;
  id?: string;
  fullWidth?: boolean;
  rounded?: boolean;
  small?: boolean;
  large?: boolean;
  style?: string;
}

interface Button extends ButtonBase {
  onClick?: () => void;
  disabled?: false;
  outline?: boolean;
}

interface DisabledButton extends ButtonBase {
  disabled: true;
  onClick?: never;
  outline?: never;
}

export type ButtonProps = Button | DisabledButton;