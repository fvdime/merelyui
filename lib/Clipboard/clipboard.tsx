import React, { useState } from "react";

interface ClipboardBaseProps {
  content: string;
  children: React.ReactNode;
}

interface WithTitle extends ClipboardBaseProps {
  title: string;
  terminal?: never;
}

interface WithTerminal extends ClipboardBaseProps {
  title?: never;
  terminal: true;
}

interface AsBase extends ClipboardBaseProps {
  title?: never;
  terminal?: never;
}

type ClipboardProps = WithTitle | WithTerminal | AsBase;

export const Clipboard = ({
  children,
  content,
  title,
  terminal,
}: ClipboardProps) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [animateOut, setAnimateOut] = useState<boolean>(false);

  const handleCopy = () => {
    setAnimateOut(true);
    setTimeout(() => {
      navigator.clipboard.writeText(content).then(() => {
        setCopied(true);
        setAnimateOut(false);
        setTimeout(() => {
          setAnimateOut(true);
          setTimeout(() => {
            setCopied(false);
            setAnimateOut(false);
          }, 200);
        }, 2000);
      });
    }, 200);
  };

  return (
    <section className="w-full h-full border rounded-md bg-inherit text-inherit border-inherit">
      <div
        className={`w-full h-full flex flex-row items-center justify-between py-2 px-4 border-inherit ${
          terminal || title ? "border-b" : "border-0"
        }`}
      >
        <div className="flex flex-row items-center justify-start gap-1">
          {terminal && (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M4 17l6-6-6-6" />
                <path d="M12 19h8" />
              </svg>
            </>
          )}
          <h1 className="font-medium">
            {terminal ? "Terminal" : title || null}
          </h1>
        </div>
        {/* Copy Button*/}
        <button
          onClick={handleCopy}
          className={`transition-opacity duration-300 ease-out ${
            animateOut ? "opacity-0" : "opacity-100"
          }`}
        >
          {copied ? (
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#000000"
            >
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="p-4">
        {children}
        <pre className="hidden">{content}</pre>
      </div>
    </section>
  );
};
