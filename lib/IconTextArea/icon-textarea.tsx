import React from "react";
import { AdjustSizeProps } from "../utils/adjust-size";
import { BaseInputProps } from "../utils/types";

interface IconTextAreaBase extends BaseInputProps {
  rows?: number;
  email?: boolean;
  icon?: React.ReactElement;
}

type IconTextAreaProps = AdjustSizeProps<IconTextAreaBase>;

export const IconTextArea = ({
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
  underline,
  style,
  small,
  tll,
  trl,
  bll,
  brl,
  transparent,
  email,
  icon,
  theme,
}: IconTextAreaProps) => {
  const renderLabel = (text: string | undefined) => text && <span>{text}</span>;

  const justifyContentClasses = (start?: string, end?: string) =>
    start && end ? "justify-between" : start ? "justify-start" : "justify-end";

  const textareaClasses = [
    "focus:border-info placeholder:text-muted dark:placeholder:text-soft text-basis dark:text-inverted rounded",
    style,
    fullWidth ? "w-full" : "w-fit",
    large
      ? "px-4 py-5 text-lg placeholder:text-lg ps-12"
      : small
        ? "text-xs py-[0.3rem] px-4 placeholder:text-xs ps-10"
        : "py-2.5 px-4 text-sm placeholder:text-sm ps-10",
    nooutline
      ? "border-none bg-base dark:bg-base"
      : underline
        ? "border-b bg-transparent"
        : "border border-base dark:border-inverted",
    transparent ? "bg-transparent" : "bg-base dark:bg-base",
    disabled &&
      "disabled:text-muted disabled:border-muted disabled:shadow-none disable:border-muted disabled:cursor-not-allowed",
  ].join(" ");

  return (
    <div
      className={`
      ${theme}
      ${fullWidth ? "w-full" : "w-fit"}`}
    >
      <label
        htmlFor={htmlFor}
        className={`block text-sm ${!label && "sr-only"}`}
      >
        {label}
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
          className={`absolute flex items-center justify-center ps-4  ${
            large
              ? "top-6 left-0"
              : `${small ? "top-2 left-0" : "top-3.5 left-0"}`
          }`}
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
            </>
          )}
        </button>
        <textarea
          rows={rows ? rows : large ? 5 : small ? 1 : 3}
          disabled={disabled}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          onBlur={onBlur}
          name={name}
          id={id}
          required={required}
          maxLength={maxLength}
          defaultValue={defaultValue}
          className={textareaClasses}
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
