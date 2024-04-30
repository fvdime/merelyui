import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  secondary?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  small?: boolean;
  large?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
  style?: string;
}

export const Button = ({
  children,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
  style,
  small,
  rounded,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`font-medium text-center text-zinc-950 border border-zinc-300 focus:ring focus:ring-zinc-200 focus:outline-none transition-all ease-in duration-300 ${style}
			${fullWidth ? "w-full" : "w-fit"}
			${rounded ? "rounded-full" : "rounded-md"}
			${large ? "py-4 px-12 text-lg" : "py-2.5 px-6 text-sm"}
			${small && "text-xs py-1 px-3"}
			${outline ? "bg-transparent hover:bg-zinc-100" : "bg-zinc-100"}
			${
        disabled
          ? "disabled:text-zinc-400 disabled:border-zinc-300 disabled:shadow-none disabled:cursor-not-allowed"
          : "hover:text-zinc-700 hover:bg-zinc-200"
      }
			${secondary ? "" : ""}
		`}
    >
      {children}
    </button>
  );
};
