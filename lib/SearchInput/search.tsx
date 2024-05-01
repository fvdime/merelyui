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
  icon?: boolean
}

export const Search = ({
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
  icon
}: InputProps) => {
  return (
    <div className="w-full">
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
      <div className="relative">
        <button
          type="button"
          disabled={disabled}
          className={`absolute inset-y-0 right-0 flex items-center cursor-pointer ${icon ? "pe-4" : "pe-0"}  ${
            disabled
              && "disabled:bg-transparent disabled:text-zinc- disabled:border-none disabled:shadow-none disabled:cursor-not-allowed"
          }`}
        >
          {icon ? <>
            <svg
                className={`text-zinc-500 ${small ? "w-3 h-3" : "w-4 h-4"} ${
                  large && "w-6 h-6"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
          </>: <span className={`font-medium duration-300 transition-all ease-in border 
            ${rounded ? "rounded-e-full" : "rounded-e-md"}
            ${
              large
                ? "px-4 py-5 text-lg placeholder:text-lg"
                : "py-2.5 px-4 text-sm placeholder:text-sm"
            }
            ${small && "text-xs py-[0.3rem] px-4 placeholder:text-xs"}
            ${transparent ? "bg-transparent border-none text-black hover:text-zinc-500" : "bg-zinc-700 border-zinc-700 hover:bg-zinc-800 hover:border-zinc-800 text-zinc-50"}
            ${secondary ? "disabled:hover:text-black" : ""}
          `}>Search</span>}
        </button>
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
          className={`focus:outline-none focus:ring-0 focus:border-blue-500 placeholder:text-zinc-400 w-full ${style}
            ${rounded ? "rounded-full" : "rounded-md"}
            ${
              large
                ? "px-4 py-5 text-lg placeholder:text-lg"
                : "py-2.5 px-4 text-sm placeholder:text-sm"
            }
            ${small && "text-xs py-[0.3rem] px-4 placeholder:text-xs"}
            ${transparent ? "bg-transparent" : "bg-zinc-50"}
            ${nooutline ? "border-none bg-zinc-200" : "border border-zinc-300"}
            ${
              disabled
                && "disabled:bg-zinc-200 disabled:text-zinc-400 disabled:border-zinc-300 disabled:shadow-none disabled:cursor-not-allowed"
            }
            ${secondary ? "" : ""}
          `}
        />
      </div>
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
