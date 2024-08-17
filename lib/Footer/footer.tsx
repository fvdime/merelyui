import { Link, SocialLink } from "merelyui";
import { FooterProps, FooterSocial } from "./footer.types";

export const Footer= ({
  footerData,
  secondary,
  tertiary,
  quaternary,
}: FooterProps) => {
  return (
    <footer
      className={`bg-white h-full w-full
    ${!(tertiary || quaternary) && "border-t border-gray-50"}
    `}
    >
      {footerData.map((data, i) => (
        <div
          key={i}
          className={`max-w-screen-xl mx-auto w-full h-full p-4  flex flex-col justify-center items-center
          ${tertiary || quaternary ? "gap-0 pb-6" : "gap-8 py-6 lg:py-8"}
          `}
        >
          <section
            className={`w-full h-full flex flex-col items-center gap-8 sm:mt-8
            ${
              secondary
                ? "max-w-sm justify-center"
                : "md:flex-row justify-between"
            }
            `}
          >
            <div
              className={`w-full flex flex-col items-center justify-center gap-1.5
            ${!secondary && "md:w-1/2 md:items-start"}
            `}
            >
              {data.image && (
                <img
                  src={data.image}
                  alt="logo"
                  className="w-24 h-24 object-cover object-center"
                />
              )}
              {!tertiary && (
                <a
                  href={data.href}
                  className={`font-semibold
              ${quaternary ? "text-xl" : "text-3xl"}
              `}
                >
                  {data.logo}
                </a>
              )}
              <p className="text-sm text-gray-500">{data.content}</p>
            </div>
            <div
              className={`flex items-center gap-8
              ${
                quaternary
                  ? "flex-wrap w-full md:w-fit h-fit justify-between md:justify-end"
                  : "w-full md:w-1/3 flex-row justify-between"
              }
              ${secondary && "w-full md:justify-center"}
            `}
            >
              {data.links &&
                data.links.map((link) => (
                  <div key={link.id}>
                    {secondary || quaternary ? (
                      <Link href={link.href!} label={link.label} target="_blank" small/>

                    ) : (
                      <h2 className="mb-4 text-sm font-semibold uppercase underline">
                        {link.label}
                      </h2>
                    )}
                    <ul className="text-gray-600 font-medium text-sm">
                      {link.links &&
                        link.links.map((link) => (
                          <li key={link.href} className="mb-2.5">
                             <Link href={link.href!} label={link.name} target="_blank"  small/>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </div>
          </section>
          <section
            className="w-full flex flex-col items-center justify-center text-xs"
          >
            <hr className="w-full my-4 sm:mx-auto border-zinc-300" />
            <div
              className={`w-full p-2 flex flex-col md:flex-row justify-center items-center  gap-4
            ${data.socials && "md:justify-between"}
            `}
            >
              <span className="text-zinc-500">
                © 2024{" "}
                <Link href={data.href!} label={data.logo}small/>

                . All Rights Reserved.
              </span>
              <div className="flex flex-row gap-4">
                {data.socials &&
                  data.socials.map((social: FooterSocial, i: number) => (
                    <SocialLink key={i} social={social.social} href={social.href} small />
                  ))}
              </div>
            </div>
          </section>
        </div>
      ))}
    </footer>
  );
};
