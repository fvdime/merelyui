import { AdjustSizeProps } from "../utils/adjust-size";

interface InputBase {
  placeholder: string;
  htmlFor: string;
  value?: string;
  type?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  label?: string;
  required?: boolean;
  maxLength?: number;
  fullWidth?: boolean;
  rounded?: boolean;
  nooutline?: boolean;
  transparent?: boolean;
  style?: string;
  tll?: string;
  trl?: string;
  bll?: string;
  brl?: string;
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
    rounded ? "rounded-full" : "rounded-md",
    large
      ? "px-4 py-5 text-lg placeholder:text-lg"
      : "py-2.5 px-4 text-sm placeholder:text-sm",
    small ? "text-xs py-[0.3rem] px-4 placeholder:text-xs" : "",
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
        className={`w-full flex items-center mb-2 text-sm text-zinc-700 ${justifyContentClasses(tll, trl)}`}
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
        className={`w-full flex items-center mb-2 text-sm text-zinc-700 ${justifyContentClasses(bll, brl)}`}
      >
        {renderLabel(bll)}
        {renderLabel(brl)}
      </div>
    </div>
  );
};
