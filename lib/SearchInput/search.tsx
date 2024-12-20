import React from "react";
import { Kbd } from "merelyui";
import { AdjustSizeProps } from "../utils/adjust-size";
interface SearchInputBase {
  placeholder: string;
  htmlFor: string;
  value?: string;
  type?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  required?: boolean;
  maxLength?: number;
  rounded?: boolean;
  nooutline?: boolean;
  transparent?: boolean;
  iconPosition?: "left" | "right";
  tll?: string;
  trl?: string;
  bll?: string;
  brl?: string;
  kbd?: string;
  theme?: string;
}

type SearchInputProps = AdjustSizeProps<SearchInputBase>;

export const Search = ({
  placeholder,
  value,
  type = "text",
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
  large,
  nooutline,
  small,
  rounded,
  transparent,
  iconPosition = "left",
  tll,
  trl,
  bll,
  brl,
  kbd,
  theme
}: SearchInputProps) => {
  return (
    <form className={`w-full ${theme}`}>
      {label && (
        <label
          htmlFor={htmlFor}
          className={`block mb-2 text-sm ${!label && "sr-only"}`}
        >
          {label}
        </label>
      )}
      <div
        className={`w-full flex items-center mb-2 text-sm text-basis dark:text-inverted ${
          tll ? "justify-start" : "justify-end"
        } ${tll && trl && "justify-between"}`}
      >
        {tll && trl ? (
          <>
            <span>{tll}</span>
            <span>{trl}</span>
          </>
        ) : (
          <span>{tll || trl}</span>
        )}
      </div>
      <div className="relative">
        <span
          className={`absolute inset-y-0 flex items-center cursor-pointer
            ${iconPosition === "right" ? "right-0 pe-4" : "ps-4 left-0"}
            ${
              disabled &&
              "disabled:bg-transparent disabled:border-none disabled:text-muted disabled:shadow-none disabled:cursor-not-allowed"
            }`}
        >
          <svg
            className={`text-muted dark:text-soft ${
              small ? "w-3 h-3" : large ? "w-6 h-6" : "w-4 h-4"
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
        </span>
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
          className={`focus:outline-none focus:ring-0 focus:border-info placeholder:text-muted dark:placeholder:text-soft w-full
              ${iconPosition === "left" ? "ps-10" : "ps-4"}
              ${rounded ? "rounded-full" : "rounded-md"}
              ${
                large
                  ? "px-4 py-5 text-lg placeholder:text-lg"
                  : small
                    ? "text-xs py-[0.3rem] px-4 placeholder:text-xs"
                    : "py-2.5 px-4 text-sm placeholder:text-sm"
              }
               ${
                 nooutline && transparent
                   ? "bg-transparent border-none"
                   : transparent
                     ? "bg-transparent border border-base dark:border-inverted"
                     : nooutline
                       ? "bg-base dark:bg-base border-none"
                       : "bg-base dark:bg-base border border-base dark:border-inverted"
               }
              ${
                disabled &&
                "disabled:text-muted disabled:border-muted disabled:shadow-none disable:border-muted disabled:cursor-not-allowed"
              }
            `}
        />
        {!small && !large && kbd && (
          <div
            className={`
                absolute
                ${iconPosition === "right" ? "left-2 bottom-2.5" : "right-2 bottom-2.5"}
              `}
          >
            .<Kbd>{kbd}</Kbd>
          </div>
        )}
      </div>
      <div
        className={`w-full flex items-center mb-2 text-sm text-basis dark:text-inverted ${
          bll ? "justify-start" : "justify-end"
        } ${bll && brl && "justify-between"}`}
      >
        {bll && brl ? (
          <>
            <span>{bll}</span>
            <span>{brl}</span>
          </>
        ) : (
          <span>{bll || brl}</span>
        )}
      </div>
    </form>
  );
};
