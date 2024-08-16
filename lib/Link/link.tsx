interface BaseLinkProps {
  label: string;
  href: string;
  id?: string;
  target?: string;
}

interface SecondaryLinkProps extends BaseLinkProps {
  secondary: true;
  position: "left" | "right";
  tertiary?: never;
}

interface TertiaryLinkProps extends BaseLinkProps {
  tertiary: true;
  secondary?: never;
  position?: never;
}

interface DefaultLinkProps extends BaseLinkProps {
  secondary?: false;
  tertiary?: false;
  position?: never;
}

type LinkProps = SecondaryLinkProps | TertiaryLinkProps | DefaultLinkProps;

export const Link = ({
  id,
  label,
  href,
  target,
  secondary,
  tertiary,
  position,
}: LinkProps) => {
  const renderStandardLink = () => (
    <a
      id={id}
      href={href}
      target={target}
      className={`w-fit inline-flex items-center justify-center gap-1 text-base group ${
        !secondary &&
        "border-b-0 bg-no-repeat bg-gradient-to-b from-transparent to-transparent hover:bg-gradient-to-b hover:from-transparent hover:to-current hover:bg-[length:100%_2px] bg-[length:0_2px] bg-bottom transition-[background-size] duration-500 ease-in-out"
      }`}
    >
      <span
        className={`font-normal ${position === "left" ? "order-2" : "order-1"}`}
      >
        {label}
      </span>
      {secondary && (
        <svg
          className={`w-3.5 h-3.5 duration-300 ease-in-out transition-transform shrink-0 ${
            position === "left"
              ? "order-1 group-hover:-translate-x-1 rotate-180"
              : "order-2 group-hover:translate-x-1"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        </svg>
      )}
    </a>
  );

  const renderTertiaryLink = () => (
    <div
      id={id}
      className="relative inline-block h-8 w-24 overflow-hidden group"
    >
      <a
        href={href}
        target={target}
        className="absolute inset-0 flex items-center justify-center transition-transform ease-in-out duration-700 group-hover:-translate-y-full translate-y-0"
      >
        {label}
      </a>
      <a
        href={href}
        target={target}
        className="absolute inset-0 flex items-center justify-center transition-transform ease-in-out duration-700 translate-y-full group-hover:translate-y-0"
      >
        {label}
      </a>
    </div>
  );

  return tertiary ? renderTertiaryLink() : renderStandardLink();
};
