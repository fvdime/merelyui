import { ButtonProps } from "./button.types";

export const Button = ({
  children,
  id,
  fullWidth,
  large,
  onClick,
  disabled,
  style,
  small,
  rounded,
  theme,
}: ButtonProps) => {
  const baseClasses =
    "font-medium text-center bg-button-accent dark:bg-button-inverted text-inverted dark:text-base border border-base focus:ring focus:ring-base focus:outline-none scale-100 active:scale-90 transition-all ease-in duration-500";

  const widthClasses = fullWidth ? "w-full" : "w-fit";
  const roundedClasses = rounded ? "rounded-full" : "rounded-md";
  const sizeClasses = large
    ? "py-3 px-12 text-lg"
    : small
      ? "text-xs py-1.5 px-3"
      : "py-2.5 px-6 text-sm";
  const disabledClasses = disabled
    ? "disabled:text-muted disabled:border-muted disabled:shadow-none disabled:cursor-not-allowed"
    : "hover:text-muted dark:hover:bg-button-inverted-hover hover:bg-button-accent-hover";

  return (
    <button
      id={id}
      disabled={disabled}
      onClick={onClick}
      className={`${theme} ${baseClasses} ${style} ${widthClasses} ${roundedClasses} ${sizeClasses} ${disabledClasses}`}
    >
      {children}
    </button>
  );
};
