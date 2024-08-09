interface LinkProps {
  id?: string;
  label: string;
  href: string;
  target?: string;
  secondary?: boolean;
}

export const Link = ({
  id,
  label,
  href,
  target,
  secondary,
}: LinkProps) => {
  return (
    <a
      id={id}
      href={href}
      target={target}
      className={`w-fit inline-flex items-center justify-center gap-0.5 text-base group
      ${
        !secondary &&
        "border-b-0 bg-no-repeat bg-gradient-to-b from-transparent to-transparent hover:bg-gradient-to-b hover:from-transparent hover:to-current hover:bg-[length:100%_2px] bg-[length:0_2px] bg-bottom transition-[background-size] duration-500 ease-in-out"
      }
      `}
    >
      <span className="font-normal text-base">{label}</span>
      {secondary && (
        <svg
          className="w-4 h-4 rotate-45 transition-all duration-300 ease group-hover:rotate-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
          fill="currentcolor"
          aria-hidden="true"
        >
          <path d="M5.793 3H3.5V2h4v4h-1V3.707L2.354 7.854l-.708-.708L5.793 3Z" />
        </svg>
      )}
    </a>
  );
};
