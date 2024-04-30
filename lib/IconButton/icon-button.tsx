import type { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  secondary?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  small?: boolean;
  large?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
  loading?: boolean;
  like?: boolean;
  close?: boolean;
  style?: string;
  icon?: any;
  label?: boolean;
  transparent?: boolean;
  endIcon?: boolean;
}

export const IconButton= ({
  children,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
  style,
  small,
  rounded,
  icon,
  like,
  close,
  loading,
  label,
  endIcon,
  transparent,
}: IconButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex flex-row items-center justify-center gap-2 text-zinc-950 focus:ring focus:ring-zinc-200 focus:outline-none transition-all ease-in duration-300 ${style}
    ${fullWidth ? "w-full" : "w-fit"}
    ${rounded ? "rounded-full" : "rounded-lg"}
    ${large && "p-4 text-lg"}
    ${small ? "p-1.5 text-xs" : "p-3 text-sm"}
    ${transparent ? "bg-transparent border-none" : "border border-zinc-300"}

    ${outline ? "bg-transparent hover:bg-zinc-100" : "bg-zinc-100"}
    ${
      disabled
        ? "disabled:text-zinc-400 disabled:border-zinc-300 disabled:shadow-none disabled:cursor-not-allowed"
        : "hover:text-zinc-700 hover:bg-zinc-200"
    }
    ${secondary ? "" : ""}

    `}
    >
      {icon ? (
        <>{icon}</>
      ) : (
        <>
          {like && (
            <svg
              className={`${small ? "w-3.5 h-3.5" : "w-5 h-5"} ${
                large && "w-6 h-6"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 48 48"
            >
              <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
            </svg>
          )}
          {close && (
            <svg
              className={`${small ? "w-2.5 h-2.5" : "w-3 h-3"} ${
                large && "w-4 h-4"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          )}
          {loading && (
            <svg
              aria-hidden="true"
              role="status"
              className={`text-black animate-spin ${
                small ? "w-3 h-3" : "w-4 h-4"
              } ${large && "w-6 h-6"}`}
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#030303"
              ></path>
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              ></path>
            </svg>
          )}
        </>
      )}

      <span
        className={`${label ? "font-medium" : "sr-only"} ${
          endIcon ? "order-first" : "order-last"
        }`}
      >
        {children}
      </span>
    </button>
  );
};