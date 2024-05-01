interface InputProps {
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
  secondary?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  small?: boolean;
  large?: boolean;
  nooutline?: boolean;
  transparent?: boolean;
  style?: string;
  tll?: string;
  trl?: string;
  bll?: string;
  brl?: string;
}

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
  secondary,
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
  return (
    <div className={`${fullWidth ? "w-full" : "w-fit"}`}>
      <label
        htmlFor={htmlFor}
        className={`block mb-2 text-sm ${!label && "sr-only"}`}
      >
        {label ? label : ""}
      </label>
      <div
        className={`w-full flex items-center mb-2 text-sm text-zinc-700 ${
          tll ? "justify-start" : "justify-end"
        } ${tll && trl && "justify-between"}`}
      >
        {tll && trl ? (
          <>
            <span>{tll}</span>
            <span>{trl}</span>
          </>
        ) : (
          <>{tll || (trl && <span>{tll || trl}</span>)}</>
        )}
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
        className={`py-2 px-4 focus:outline-none focus:ring-0 focus:border-blue-500 placeholder:text-zinc-400 ${style}
			${fullWidth ? "w-full" : "w-fit"}
			${rounded ? "rounded-full" : "rounded-md"}
			${large ? "px-4 py-5 text-lg placeholder:text-lg" : "py-2.5 px-4 text-sm placeholder:text-sm "}
			${small && "text-xs py-[0.3rem] px-4 placeholder:text-xs"}
      ${transparent ? "bg-transparent" : "bg-zinc-50"}
			${nooutline ? "border-none bg-zinc-200" : "border border-zinc-300"}
			${
        disabled &&
        "disabled:bg-zinc-200 disabled:text-zinc-400 disabled:border-zinc-300 disabled:shadow-none disabled:cursor-not-allowed"
      }
			${secondary ? "" : ""}
		`}
      />
      <div
        className={`w-full flex items-center mb-2 text-sm text-zinc-700 ${
          bll ? "justify-start" : "justify-end"
        } ${bll && brl && "justify-between"}`}
      >
        {bll && brl ? (
          <>
            <span>{bll}</span>
            <span>{brl}</span>
          </>
        ) : (
          <>{bll || (brl && <span>{bll || brl}</span>)}</>
        )}
      </div>
    </div>
  );
};
