import React from "react";

interface ToolTipBase {
  children: React.ReactNode;
  position: "top" | "bottom" | "left" | "right";
}

interface LabelToolTip extends ToolTipBase {
  label?: string;
  button?: never;
}

interface ButtonToolTip extends ToolTipBase {
  label?: never;
  button?: React.ReactElement;
}

type ToolTipProps = LabelToolTip | ButtonToolTip;

export const ToolTip = ({
  children,
  position,
  label,
  button,
}: ToolTipProps) => {
  return (
    <div className="relative group">
      {button ? (
        button
      ) : (
        <div className="text-inherit bg-inherit focus:ring-0 focus:outline-none focus:ring-inherit font-medium rounded-lg text-sm px-6 py-2.5 text-center transition duration-300 ease-in-out">
          {label}
        </div>
      )}
      {/* ToolTip */}
      <span
        className={`min-w-max w-auto m-1.5 rounded shadow-md absolute z-10 text-xs font-semibold duration-500 transition-all scale-0 py-2 px-4 group-hover:scale-100
        ${position === "top" && "bottom-full left-1/2 transform -translate-x-1/2 origin-bottom"}
        ${position === "bottom" && "top-full left-1/2 transform -translate-x-1/2 origin-top"}
        ${position === "left" && "right-full top-1/3 transform -translate-y-1/2 origin-right"}
        ${position === "right" && "left-full top-1/3 transform -translate-y-1/2 origin-left"}
        `}
      >
        {children}
      </span>
    </div>
  );
};
