import React, { useImperativeHandle, useState, useRef, useEffect } from "react";
import { DropdownHandle, DropdownProps } from "./dropdown.types";

export const Dropdown = React.forwardRef<DropdownHandle, DropdownProps>(
  ({ id, header, body, footer, button, label }, ref) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(
      ref,
      () => ({
        toggleDropdown: () => setIsOpen((prev) => !prev),
      }),
      []
    );

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    if (!isOpen) return null

    return (
      <div className="relative">
        {/* Render the external button if provided */}
        {button ? button : null}
        {label && (
          <button
            className="px-4 py-2 bg-red-500 text-white rounded mt-4"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {label}
          </button>
        )}

        {isOpen && (
          <div
            id={id}
            ref={dropdownRef}
            className="w-fit h-fit max-w-full max-h-full absolute z-10 animate-slideIn"
          >
            <div className="h-full lg:h-auto border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center justify-between p-8 rounded-t">
                {header}
              </div>
              <div className="relative p-4 flex-auto">{body}</div>
              <div className="flex flex-col p-10 gap-2">{footer}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
);
