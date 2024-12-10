import React from "react";

interface KbdProps {
  children: React.ReactNode;
  theme?: string;
}

export const Kbd = ({ children, theme }: KbdProps) => {
  return (
    <kbd
      className={`w-fit h-fit bg-transparent border-base text-basis dark:border-inverted dark:text-inverted border-t border-b-[2.5px] border-x font-medium rounded-lg text-sm px-2.5 py-1 cursor-default
      ${theme}
    `}
    >
      {children}
    </kbd>
  );
};
