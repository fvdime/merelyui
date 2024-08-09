interface ToolTipProps {
  children: React.ReactNode;
  position: "top" | "bottom" | "left" | "right";
  label: string;
  secondary?: boolean;
}

export const ToolTip = ({
  children,
  position,
  label,
  secondary,
}: ToolTipProps) => {
  return (
    <div className="text-white bg-black focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center transition duration-300 ease-in-out relative group">
      {label}
      {/* ToolTip */}
      <span
        className={`min-w-max w-auto m-1.5 rounded shadow-md absolute z-10 text-xs font-semibold duration-500 transition-all scale-0 py-2 px-4 group-hover:scale-100
        ${secondary ? "bg-white text-black" : "bg-black text-white"}
        ${position === "top" && "bottom-full left-1/2 transform -translate-x-1/2 origin-bottom"}
        ${ position === "bottom" && "top-full left-1/2 transform -translate-x-1/2 origin-top" }
        ${ position === "left" && "right-full top-1/3 transform -translate-y-1/2 origin-right" }
        ${ position === "right" && "left-full top-1/3 transform -translate-y-1/2 origin-left" }
        `}
      >
        {children}
      </span>
    </div>
  );
};
