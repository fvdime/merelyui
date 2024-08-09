import React, { useState } from "react";
import { Button } from "merelyui";

interface DrawerProps {
  children: React.ReactNode;
  position: "top" | "bottom" | "left" | "right";
  label: string;
}

export const Drawer = ({ children, position, label }: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full h-full">
      {/* Toggle Button */}
      <Button
        onClick={toggleDrawer}
      >
        {label}
      </Button>

      {/* Drawer Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm duration-300 z-50 ${
          isOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={toggleDrawer}
      ></div>

      {/* Drawer Content */}
      <aside
        className={`
          bg-white fixed z-50 text-black duration-500 transition-transform transform
          ${
            position === "top" && "h-[40vh] md:h-[60vh] min-w-full top-0 left-0"
          }
          ${
            position === "bottom" &&
            "h-[40vh] md:h-[60vh] min-w-full bottom-0 left-0"
          }
          ${position === "left" && "min-h-full w-[40vw] top-0 left-0"}
          ${position === "right" && "min-h-full w-[40vw] top-0 right-0"}
          ${
            position === "top" &&
            (isOpen ? "translate-y-0" : "-translate-y-full")
          }
          ${
            position === "bottom" &&
            (isOpen ? "translate-y-0" : "translate-y-full")
          }
          ${
            position === "left" &&
            (isOpen ? "translate-x-0" : "-translate-x-full")
          }
          ${
            position === "right" &&
            (isOpen ? "translate-x-0" : "translate-x-full")
          }
        `}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b border-black/10">
          <span className="text-lg font-semibold">{label}</span>
          <button
            onClick={toggleDrawer}
            className="p-2 text-black hover:text-black/50 transition duration-300"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-4">{children}</div>
      </aside>
    </div>
  );
};