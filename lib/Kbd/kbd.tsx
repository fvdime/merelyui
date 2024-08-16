import React from "react";

interface KbdProps {
  children: React.ReactNode;
}

export const Kbd = ({ children }: KbdProps) => {
  return (
    <kbd className="w-fit h-fit text-gray-500 border-t border-b-[2.5px] border-x border-gray-500 font-medium rounded-lg text-sm px-3 py-1 cursor-default">
      {children}
    </kbd>
  );
};
