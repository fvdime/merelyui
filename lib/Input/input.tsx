import { AdjustSizeProps } from "../utils/adjust-size";
import { BaseInputProps } from "../utils/types";

interface InputBase extends BaseInputProps {
  type?: string;
  rounded?: boolean;
}

type InputProps = AdjustSizeProps<InputBase>;

export const Input = ({
  placeholder,
  value,
  type,
  disabled,
  id,
  name,
  onChange,
  onBlur,
  defaultValue,
  label,
  required,
  maxLength,
  htmlFor,
  fullWidth,
  large,
  nooutline,
  underline,
  style,
  small,
  rounded,
  tll,
  trl,
  bll,
  brl,
  transparent,
}: InputProps) => {
  const renderLabel = (text: string | undefined) => text && <span>{text}</span>;

  const justifyContentClasses = (start?: string, end?: string) =>
    start && end ? "justify-between" : start ? "justify-start" : "justify-end";

  const inputClasses = [
    "py-2 px-4 focus:outline-none focus:ring-0 focus:border-blue-500 placeholder:text-zinc-400",
    style,
    fullWidth ? "w-full" : "w-fit",
    rounded ? "rounded-full" : underline ? "rounded-none" : "rounded-md",
    large
      ? "px-4 py-5 text-lg placeholder:text-lg"
      : small
        ? "text-xs py-[0.3rem] px-4 placeholder:text-xs"
        : "py-2.5 px-4 text-sm placeholder:text-sm",
    transparent ? "bg-transparent" : "bg-inherit",
    nooutline
      ? "border-none bg-inherit"
      : underline
        ? "border-b bg-transparent"
        : "border border-inherit",
    disabled &&
      "disabled:bg-zinc-200 disabled:text-zinc-400 disabled:border-zinc-300 disabled:shadow-none disabled:cursor-not-allowed",
  ].join(" ");

  return (
    <div className={`${fullWidth ? "w-full" : "w-fit"}`}>
      <label
        htmlFor={htmlFor}
        className={`block text-sm ${!label && "sr-only"}`}
      >
        {label}
      </label>
      <div
        className={`w-full flex items-center mb-2 text-sm text-inherit ${justifyContentClasses(tll, trl)}`}
      >
        {renderLabel(tll)}
        {renderLabel(trl)}
      </div>
      <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        onBlur={onBlur}
        name={name}
        id={id}
        required={required}
        maxLength={maxLength}
        defaultValue={defaultValue}
        className={inputClasses}
      />
      <div
        className={`w-full flex items-center mb-2 text-sm text-inherit ${justifyContentClasses(bll, brl)}`}
      >
        {renderLabel(bll)}
        {renderLabel(brl)}
      </div>
    </div>
  );
};
