interface TextAreaProps {
  placeholder: string;
  htmlFor: string;
  rows?: number
  value?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  defaultValue?: string;
  label?: string;
  required?: boolean;
  maxLength?: number;
  secondary?: boolean;
  fullWidth?: boolean;
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
  secondary,
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
  return (
    <div className="w-full">
      <label
        htmlFor={htmlFor}
        className={`block mb-1 text-sm ${!label && "sr-only"}`}
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
      <textarea
        rows={rows ? rows : (large ? 5 : (small ? 1 : 3))}
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
        className={`py-2 px-4 focus:outline-none focus:ring-0 focus:border-blue-500 placeholder:text-zinc-400 ${style}
			${fullWidth ? "w-full" : "w-fit"}
      ${large ? "px-4 py-5 text-lg placeholder:text-lg" : `${small ? "text-xs py-[0.3rem] px-4 placeholder:text-xs" : "py-2.5 px-4 text-sm placeholder:text-sm"}`}
      ${transparent ? "bg-transparent" : "bg-zinc-50"}
			${nooutline ? "border-none bg-zinc-200" : "border border-zinc-300"}
			${
        disabled
          && "disabled:bg-zinc-200 disabled:text-zinc-400 disabled:border-zinc-300 disabled:shadow-none disabled:cursor-not-allowed"
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
