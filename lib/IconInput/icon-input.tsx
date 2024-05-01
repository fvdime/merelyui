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
  password?: boolean;
  email?: boolean;
  icon?: any;
}

export const IconInput = ({
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
  email,
  password,
  icon,
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
          className="absolute inset-y-0 left-0 flex items-center justify-center ps-4"
        >
          {icon ? (
            <>{icon}</>
          ) : (
            <>
              {email && (
                <>
                  <svg
                    className={`text-zinc-500 ${
                      small ? "w-3 h-3" : "w-4 h-4"
                    } ${large && "w-6 h-6"}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </>
              )}
              {password && (
                <>
                  <svg
                    className={`text-zinc-500 ${
                      small ? "w-4 h-4" : "w-6 h-6"
                    } ${large && "w-8 h-8"}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" />
                  </svg>
                </>
              )}
            </>
          )}
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
          className={`focus:outline-none focus:ring-0 focus:border-blue-500 placeholder:text-zinc-400 focus:border-blue-500${style}
            ${fullWidth ? "w-full" : "w-fit"}
            ${rounded ? "rounded-full" : "rounded-md"}
            ${
              large
                ? "px-4 py-5 text-lg placeholder:text-lg ps-12"
                : "py-2.5 px-4 text-sm placeholder:text-sm ps-10"
            }
            ${small && "text-xs py-[0.3rem] px-4 placeholder:text-xs ps-10"}
            ${transparent ? "bg-transparent" : "bg-zinc-50"}
            ${nooutline ? "border-none bg-zinc-200" : "border border-zinc-300"}
            ${
              disabled &&
              "disabled:bg-zinc-200 disabled:text-zinc-400 disabled:border-zinc-300 disabled:shadow-none disabled:cursor-not-allowed"
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
