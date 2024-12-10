import React, { useState } from "react";
import { NavbarLink, NavbarProps } from "./navbar.types";
import { SocialLink } from "merelyui";

// Reusable Button Component
const Button: React.FC<{
  label: string;
  onClick?: () => void;
}> = ({ label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="py-1.5 px-6 text-sm font-medium bg-button-inverted text-basis dark:bg-muted dark:text-inverted rounded-md border hover:bg-button-inverted-hover dark:hover:bg-button-accent-hover focus:ring focus:ring-base focus:outline-none transition-all ease-in duration-300 self-end"
  >
    {label}
  </button>
);

// Reusable Icon Component with Notification Indicator
const Icon: React.FC<{
  icon: { svg?: string; image?: string; href?: string; indicator?: string };
}> = ({ icon }) => {
  const renderIcon = () => {
    switch (icon.svg) {
      case "shoppingCart":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-base hover:opacity-80 hover:cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        );
      case "notification":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-base hover:opacity-80  hover:cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        );
      default:
        return icon.image ? (
          <img
            className="w-8 h-8 rounded-full object-cover object-center relative hover:cursor-pointer"
            src={icon.image}
            alt="icon"
          />
        ) : null;
    }
  };

  return (
    <a href={icon.href || "#"} className="relative">
      {renderIcon()}
      {icon.indicator && (
        <span className="absolute -top-1.5 -right-1.5 px-1 bg-purple-500 rounded-full text-xs font-bold text-inverted outline outline-base dark:outline-inverted">
          {icon.indicator}
        </span>
      )}
    </a>
  );
};

// Reusable Link Component
const Link = ({ label, href, classname }: NavbarLink) => (
  <a href={href} className={`hover:text-muted ${classname}`}>
    {label}
  </a>
);

export const Navbar = ({
  navbarData,
  secondary,
  tertiary,
  sticky,
  modalRef,
  theme,
}: NavbarProps) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const headerClasses = `
    w-full h-fit ${
      tertiary
        ? `max-w-screen-xl mx-auto fixed z-50 top-2 left-0 right-0 bg-white/30 dark:bg-black/70 backdrop-blur px-4 md:px-8 py-2.5 shadow-md rounded-lg ${
            isNavOpen ? "h-1/2 md:h-fit" : "h-fit"
          }`
        : sticky
          ? `fixed z-50 top-0 left-0 right-0 bg-gray-50 backdrop-blur-xl px-4 md:px-8 py-2 h-fit
        ${isNavOpen ? "shadow-none" : "shadow-md"}
        `
          : "p-4 md:py-4 relative"
    }
      ${theme}
  `;

  return (
    <header className={headerClasses} ref={modalRef}>
      {navbarData.map((item, index) => (
        <>
          <div
            key={index}
            className={`h-fit flex flex-row justify-between items-center ${
              !tertiary ? "max-w-screen-xl mx-auto" : "w-full"
            }`}
          >
            {item.image ? (
              <div className="flex flex-row items-center justify-start gap-2">
                <img
                  src={item.image}
                  className="w-8 h-8 object-center object-cover"
                />
                <a href={item.href} className="text-xl font-semibold">
                  {item.logo}
                </a>
              </div>
            ) : (
              <a href={item.href} className="text-xl font-semibold">
                {item.logo}
              </a>
            )}

            {!secondary && (
              <div className="hidden md:flex flex-row justify-center items-center gap-8 font-medium">
                {item.links?.map((link, i) => (
                  <Link key={i} label={link.label} href={link.href} />
                ))}
              </div>
            )}
            {secondary ? (
              <>
                <button
                  type="button"
                  onClick={toggleNav}
                  className="flex group h-fit w-fit border-inverted dark:border-base"
                >
                  <div className="grid justify-items-center gap-1">
                    <span
                      className={`h-0.5 w-5 rounded-full bg-muted dark:bg-base transition ${
                        isNavOpen && "rotate-45 translate-y-1.5"
                      }`}
                    />
                    <span
                      className={`h-0.5 w-5 rounded-full bg-muted dark:bg-base transition ${
                        isNavOpen && "scale-x-0"
                      }`}
                    />
                    <span
                      className={`h-0.5 w-5 rounded-full bg-muted dark:bg-base transition ${
                        isNavOpen && "-rotate-45 -translate-y-1.5"
                      }`}
                    />
                  </div>
                </button>
                <div className="w-fit h-fit flex flex-row items-center justify-end gap-2.5">
                  {item.icons?.map((icon, i) => <Icon key={i} icon={icon} />)}
                  {item.button?.map((button, i) => (
                    <Button
                      key={i}
                      label={button.label}
                      onClick={button.onClick}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="flex flex-row items-center justify-center gap-4">
                <div className="w-fit h-fit flex fex-row items-center justify-end gap-2.5">
                  {item.button?.map((button, i) => (
                    <Button
                      key={i}
                      label={button.label}
                      onClick={button.onClick}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={toggleNav}
                  className="flex md:hidden group h-fit w-fit border-inverted dark:border-base"
                >
                  <div className="grid justify-items-center gap-1">
                    <span
                      className={`h-0.5 w-5 rounded-full bg-muted dark:bg-base transition ${
                        isNavOpen && "rotate-45 translate-y-1.5"
                      }`}
                    />
                    <span
                      className={`h-0.5 w-5 rounded-full bg-muted dark:bg-base transition ${
                        isNavOpen && "scale-x-0"
                      }`}
                    />
                    <span
                      className={`h-0.5 w-5 rounded-full bg-muted dark:bg-base transition ${
                        isNavOpen && "-rotate-45 -translate-y-1.5"
                      }`}
                    />
                  </div>
                </button>
              </div>
            )}
          </div>
          {secondary
            ? isNavOpen && (
                <nav
                  className={`w-full absolute top-16 md:top-16 left-0 bg-base dark:bg-base h-80 z-10 duration-500 transition-transform transform shadow-md ${
                    isNavOpen ? "translate-y-0" : "-translate-y-full"
                  }`}
                >
                  <section className="w-full md:max-w-screen-xl mx-auto flex flex-col justify-center items-end gap-8 font-medium p-4 text-lg">
                    {item.links?.map((link, i) => (
                      <Link key={i} label={link.label} href={link.href} />
                    ))}
                    <div className="w-full border-t border-muted dark:border-inverted py-2 flex flex-row justify-between items-center">
                      <p className="text-muted dark:text-soft text-sm font-normal">
                        © 2024{" "}
                        <a
                          href="#"
                          className="font-medium hover:underline ml-1"
                        >
                          {item.logo}
                        </a>
                      </p>
                      <div className="flex flex-row gap-4">
                        {item.socials?.map((social, i) => (
                          <SocialLink
                            key={i}
                            social={social.social}
                            href={social.href}
                            small
                          />
                        ))}
                      </div>
                    </div>
                  </section>
                </nav>
              )
            : isNavOpen && (
                <div
                  className={`w-full left-0 h-fit min-w-full z-10 duration-500 transition-transform transform md:hidden flex flex-col justify-center items-center gap-1.5 font-medium p-4
                    ${isNavOpen ? "translate-y-0" : "-translate-y-full"}
                    ${
                      tertiary
                        ? "bg-transparent mt-4"
                        : "bg-base dark:bg-base shadow-md absolute"
                    }
                  `}
                >
                  {item.links?.map((link, i) => (
                    <Link
                      key={i}
                      label={link.label}
                      href={link.href}
                      classname="w-full rounded-md text-center p-2.5 bg-transparent ease duration-200 transition"
                    />
                  ))}
                </div>
              )}
        </>
      ))}
    </header>
  );
};
