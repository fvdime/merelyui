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
  theme,
}: InputProps) => {
  const renderLabel = (text: string | undefined) => text && <span>{text}</span>;

  const justifyContentClasses = (start?: string, end?: string) =>
    start && end ? "justify-between" : start ? "justify-start" : "justify-end";

  const inputClasses = [
    "py-2 px-4 focus:outline-none focus:ring-0 focus:border-info placeholder:text-muted dark:placeholder:text-soft text-basis dark:text-inverted",
    style,
    fullWidth ? "w-full" : "w-fit",
    rounded ? "rounded-full" : underline ? "rounded-none" : "rounded",
    large
      ? "px-4 py-5 text-lg placeholder:text-lg"
      : small
        ? "text-xs py-[0.3rem] px-4 placeholder:text-xs"
        : "py-2.5 px-4 text-sm placeholder:text-sm",
    transparent ? "bg-transparent" : "bg-base dark:bg-base",
    nooutline
      ? "border-none bg-base dark:bg-base"
      : underline
        ? "border-b bg-transparent"
        : "border border-base dark:border-inverted",
    disabled &&
      "disabled:text-muted disabled:border-muted disabled:shadow-none disable:border-muted disabled:cursor-not-allowed",
  ].join(" ");

  return (
    <div
      className={`
      ${theme}
      ${fullWidth ? "w-full" : "w-fit"}
    `}
    >
      <label
        htmlFor={htmlFor}
        className={`block text-sm ${!label && "sr-only"}`}
      >
        {label}
      </label>
      <div
        className={`w-full flex items-center mb-2 text-sm text-basis dark:text-inverted ${justifyContentClasses(tll, trl)}`}
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
        className={`w-full flex items-center mb-2 text-sm text-basis dark:text-inverted ${justifyContentClasses(bll, brl)}`}
      >
        {renderLabel(bll)}
        {renderLabel(brl)}
      </div>
    </div>
  );
};
