import { ButtonProps } from "./button.types";

export const Button = ({
  children,
  id,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
  style,
  small,
  rounded,
}: ButtonProps) => {
  const baseClasses =
    "font-medium text-center text-inherit border border-inherit focus:ring focus:ring-inherit focus:outline-none transition-all ease-in duration-300";

  const widthClasses = fullWidth ? "w-full" : "w-fit";
  const roundedClasses = rounded ? "rounded-full" : "rounded-md";
  const sizeClasses = large
    ? "py-3 px-12 text-lg"
    : small
    ? "text-xs py-1.5 px-3"
    : "py-2.5 px-6 text-sm";
  const outlineClasses = outline
    ? "bg-transparent hover:bg-inherit"
    : "bg-inherit";
  const disabledClasses = disabled
    ? "disabled:text-zinc-400 disabled:border-zinc-300 disabled:shadow-none disabled:cursor-not-allowed"
    : "hover:text-zinc-700 hover:bg-zinc-200";

  return (
    <button
      id={id}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${style} ${widthClasses} ${roundedClasses} ${sizeClasses} ${outlineClasses} ${disabledClasses}`}
    >
      {children}
    </button>
  );
};