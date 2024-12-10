import { AdjustSizeProps } from "../utils/adjust-size";

interface BaseLinkProps {
  label: string;
  href: string;
  id?: string;
  target?: string;
  download?: boolean;
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

type Link = SecondaryLinkProps | TertiaryLinkProps | DefaultLinkProps;

type LinkProps = AdjustSizeProps<Link>;

export const Link = ({
  id,
  label,
  href,
  target,
  secondary,
  tertiary,
  position,
  small,
  large,
  download,
}: LinkProps) => {
  const renderStandardLink = () => (
    <a
      id={id}
      href={href}
      target={target}
      download={download}
      className={`w-fit inline-flex items-center justify-center gap-1 group text-inherit
      ${small ? "text-sm" : large ? "text-lg" : "text-base"}
      ${
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
          className={`duration-300 ease-in-out transition-transform shrink-0 
          ${small ? "w-3 h-3" : large ? "w-4 h-4" : "w-3.5 h-3.5"}
          ${
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
      className={`
        relative inline-block overflow-hidden group
        ${small ? "h-4 w-20 text-xs" : large ? "h-12 w-32 text-lg" : "h-8 w-24 text-base"}
      `}
    >
      <a
        href={href}
        target={target}
        download={download}
        className="absolute inset-0 flex items-center justify-center transition-transform ease-in-out duration-1000 group-hover:-translate-y-full translate-y-0 text-inherit"
      >
        {label}
      </a>
      <a
        href={href}
        target={target}
        download={download}
        className="absolute inset-0 flex items-center justify-center transition-transform ease-in-out duration-1000 translate-y-full group-hover:translate-y-0 text-inherit"
      >
        {label}
      </a>
    </div>
  );

  return tertiary ? renderTertiaryLink() : renderStandardLink();
};
