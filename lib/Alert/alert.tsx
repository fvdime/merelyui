interface AlertProps {
  content: string;
  title?: string;
  id?: string;
  onClick?: () => void;
  dismissible?: boolean;
  fullWidth?: boolean;
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  icon?: any;
}

export const Alert = ({
  content,
  title,
  id,
  onClick,
  dismissible,
  fullWidth,
  info,
  success,
  warning,
  danger,
  icon,
}: AlertProps) => {
  return (
    <>
      <div
        className={`h-fit flex flex-row items-center justify-center gap-2 py-2.5 px-4 bg-zinc-50 rounded border focus:ring focus:ring-zinc-200 focus:outline-none transition-all ease-in duration-300 cursor-pointer
        ${fullWidth ? "w-full max-w-lg" : "w-fit max-w-md"}
        ${info && "border-zinc-200 text-zinc-950 hover:text-zinc-800"}
        ${success && "border-green-800 text-green-950 hover:text-zinc-700"}
        ${warning && "border-amber-700 text-amber-950 hover:text-zinc-700"}
        ${danger && "border-red-700 text-red-950 hover:text-zinc-700"}
        `}
        id={id}
      >
        <div className="w-full flex flex-row justify-center items-center gap-4">
          {icon ? (
            <>{icon}</>
          ) : (
            <>
              {info && (
                <>
                  <svg
                    className="flex-shrink-0 inline w-5 h-5 text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                </>
              )}
              {warning && (
                <>
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
                </>
              )}
              {success && (
                <>
                  <svg
                    className="stroke-current shrink-0 w-6 h-6 text-green-600"
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
                </>
              )}
              {danger && (
                <>
                  <svg
                    className="w-5 h-5 text-red-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                  </svg>
                </>
              )}
            </>
          )}
          <div
            className={`w-full flex flex-col items-start justify-center text-sm ${
              title ? "gap-1" : "gap-0"
            }`}
          >
            <h1 className="font-semibold">{title}</h1>
            <span>{content}</span>
          </div>
        </div>

        {dismissible && (
          <>
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
          </>
        )}
      </div>
    </>
  );
};
