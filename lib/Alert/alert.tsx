import { useEffect, useState } from "react";
import { AlertProps } from "./alert.types";

export const Alert = ({
  content,
  title,
  id,
  onClick,
  dismissible,
  fullWidth,
  status,
  icon,
  position = "top-right",
}: AlertProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);

      if (onClick) {
        setTimeout(onClick, 300);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClick]);

  const baseClasses =
    "h-fit flex items-center justify-center gap-2 py-2.5 px-4 rounded border focus:ring focus:ring-zinc-200 focus:outline-none transition-all ease-in duration-300 cursor-pointer";

  const widthClass = fullWidth ? "w-full" : "w-fit max-w-md";

  const statusClasses = {
    info: "border-zinc-200 text-zinc-950 hover:text-zinc-800",
    success: "border-green-800 text-green-950 hover:text-zinc-700",
    warning: "border-amber-700 text-amber-950 hover:text-zinc-700",
    danger: "border-red-700 text-red-950 hover:text-zinc-700",
  }[status || "info"];

  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
    top: "top-4 left-1/2 transform -translate-x-1/2",
    bottom: "bottom-4 left-1/2 transform -translate-x-1/2",
  }[position];

  const animationClasses = {
    "top-left": visible ? "translate-x-0" : "-translate-x-full",
    "top-right": visible ? "translate-x-0" : "translate-x-full",
    "bottom-left": visible ? "translate-x-0" : "-translate-x-full",
    "bottom-right": visible ? "translate-x-0" : "translate-x-full",
    top: visible ? "translate-y-0" : "-translate-y-full",
    bottom: visible ? "translate-y-0" : "translate-y-full",
  }[position];

  const iconMap = {
    info: (
      <svg
        className="shrink-0 w-5 h-5 text-blue-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
    ),
    success: (
      <svg
        className="stroke-current shrink-0 w-5 h-5 text-green-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    warning: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-5 w-5 text-amber-800"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    danger: (
      <svg
        className="stroke-current shrink-0 w-5 h-5 text-red-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
      </svg>
    ),
  }[status || "info"];

  return (
    <div
      id={id}
      className={`fixed z-[99] duration-500 ease ${positionClasses} ${animationClasses} ${baseClasses} ${widthClass} ${statusClasses}`}
    >
      <div
        className={`w-full gap-2.5 ${
          title
            ? "flex flex-col justify-start items-center"
            : "flex flex-row justify-center items-center"
        }`}
      >
        {title && dismissible && (
          <div className="w-full flex items-center justify-between">
            <h1 className="text-lg font-semibold">{title}</h1>
            <button
              className="h-full flex items-start justify-start"
              type="button"
              onClick={onClick}
            >
              <svg
                className="w-2.5 h-2.5 ms-4 text-zinc-700 hover:text-zinc-900"
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
            </button>
          </div>
        )}
        <div className="w-full flex items-center justify-center gap-4">
          {icon || iconMap}
          <p className="text-sm text-left">{content}</p>
        </div>
      </div>
      {!title && dismissible && (
        <button
          className="h-full flex items-start justify-start"
          type="button"
          onClick={onClick}
        >
          <svg
            className="w-2.5 h-2.5 ms-4 text-zinc-700 hover:text-zinc-900"
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
        </button>
      )}
    </div>
  );
};
