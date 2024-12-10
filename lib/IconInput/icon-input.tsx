import React from "react";
import { AdjustSizeProps } from "../utils/adjust-size";
import { BaseInputProps } from "../utils/types";

interface IconInputBase extends BaseInputProps {
  password?: boolean;
  email?: boolean;
  icon?: React.ReactElement;
  type?: string;
  rounded?: boolean;
}

type IconInputProps = AdjustSizeProps<IconInputBase>;

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
  email,
  password,
  icon,
  theme,
}: IconInputProps) => {
  const renderLabel = (text: string | undefined) => text && <span>{text}</span>;

  const justifyContentClasses = (start?: string, end?: string) =>
    start && end ? "justify-between" : start ? "justify-start" : "justify-end";

  const inputClasses = [
    "focus:outline-none focus:ring-0 focus:border-info placeholder:text-muted dark:placeholder:text-soft text-basis dark:text-inverted",
    style,
    fullWidth ? "w-full" : "w-fit",
    rounded ? "rounded-full" : underline ? "rounded-none" : "rounded",
    large
      ? "px-4 py-5 text-lg placeholder:text-lg ps-12"
      : small
        ? "text-xs py-[0.3rem] px-4 placeholder:text-xs ps-10"
        : "py-2.5 px-4 text-sm placeholder:text-sm ps-10",
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
        {label ? label : ""}
      </label>
      <div
        className={`w-full flex items-center mb-2 text-sm text-basis dark:text-inverted ${justifyContentClasses(
          tll,
          trl
        )}`}
      >
        {renderLabel(tll)}
        {renderLabel(trl)}
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
                <svg
                  className={`text-muted dark:text-soft ${
                    small ? "w-3 h-3" : large ? "w-6 h-6" : "w-4 h-4"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              )}
              {password && (
                <svg
                  className={`text-muted dark:text-soft ${
                    small ? "w-4 h-4" : large ? "w-8 h-8" : "w-6 h-6"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" />
                </svg>
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
          className={inputClasses}
        />
      </div>
      <div
        className={`w-full flex items-center mb-2 text-sm text-basis dark:text-inverted ${justifyContentClasses(
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
