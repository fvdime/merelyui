import { AdjustSizeProps } from "../utils/adjust-size";
import { BaseInputProps } from "../utils/types";

interface TextAreaBase extends BaseInputProps {
  rows?: number;
}

type TextAreaProps = AdjustSizeProps<TextAreaBase>;

export const TextArea = ({
  placeholder,
  value,
  rows,
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
  style,
  small,
  tll,
  trl,
  bll,
  brl,
  transparent,
}: TextAreaProps) => {
  const renderLabel = (text: string | undefined) => text && <span>{text}</span>;

  const justifyContentClasses = (start?: string, end?: string) =>
    start && end ? "justify-between" : start ? "justify-start" : "justify-end";

  const textareaClasses = [
    "py-2 px-4 focus:outline-none focus:ring-0 focus:border-blue-500 placeholder:text-zinc-400 rounded-sm",
    style,
    fullWidth ? "w-full" : "w-fit",
    large
      ? "px-4 py-5 text-lg placeholder:text-lg"
      : small
      ? "text-xs py-[0.3rem] px-4 placeholder:text-xs"
      : "py-2.5 px-4 text-sm placeholder:text-sm",
    transparent ? "bg-transparent" : "bg-zinc-50",
    nooutline ? "border-none bg-zinc-200" : "border border-zinc-300",
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
        className={`w-full flex items-center mb-2 text-sm text-zinc-700 ${justifyContentClasses(
          tll,
          trl
        )}`}
      >
        {renderLabel(tll)}
        {renderLabel(trl)}
      </div>
      <textarea
        rows={rows ? rows : large ? 5 : small ? 1 : 3}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        name={name}
        id={id}
        required={required}
        maxLength={maxLength}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        className={textareaClasses}
      />
      <div
        className={`w-full flex items-center mb-2 text-sm text-zinc-700 ${justifyContentClasses(
          bll,
          brl
        )}`}
      >
        {renderLabel(bll)}
        {renderLabel(brl)}
      </div>
    </div>
  );
};
