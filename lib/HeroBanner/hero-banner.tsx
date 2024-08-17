interface ButtonData {
  label: string;
  href: string;
}

interface BaseHeroBannerItem {
  title: string;
  subtitle?: string;
  content?: string;
  src: string;
  button?: ButtonData[];
  full?: boolean;
  id?: string;
}

interface SecondaryHeroBannerItem extends BaseHeroBannerItem {
  secondary?: true;
  tertiary?: never;
}

interface TertiaryHeroBannerItem extends BaseHeroBannerItem {
  secondary?: never;
  tertiary?: true;
  position: "left" | "right";
}

export type HeroBannerItem = SecondaryHeroBannerItem | TertiaryHeroBannerItem;

export const HeroBanner = ({ data }: { data: HeroBannerItem }) => {
  const { full = false } = data;

  return (
    <div
      className={`w-full bg-inherit text-inherit
        ${full ? "h-screen" : "h-full py-16"}
        ${data.secondary && "relative overflow-hidden flex items-center justify-center"}
      `}
    >
      {data.secondary && (
        <img
          src={data.src}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center bg-blend-multiply"
        />
      )}

      <section
        id={data.id}
        className={`max-w-screen-lg mx-auto w-full flex flex-col items-center justify-center gap-4 p-4 md:p-0 tracking-tight leading-none
          ${data.tertiary ? "md:flex-row items-center justify-center gap-4 text-center h-full" : data.secondary ? "h-[75vh] bg-black/50 dark:bg-white/50 backdrop-blur-sm rounded-md" : "h-full"}
        `}
      >
        {data.tertiary ? (
          <>
            <img
              src={data.src}
              alt="hero banner image"
              className={`block h-80 w-full object-cover object-center ${data.position === "right" ? "order-1 md:order-2" : "order-2 md:order-1"}`}
            />
            <div
              className={`w-full h-80 flex flex-col gap-4 items-center justify-between  ${data.position === "right" ? "order-2 md:order-1" : "order-1 md:order-2"}`}
            >
              <h1 className="text-2xl font-bold tracking-tight leading-none md:text-3xl lg:text-4xl">
                {data.title}
              </h1>
              <div>
                <h4 className="text-sm font-medium">
                  {data.subtitle}
                </h4>
                <p className="text-xs font-normal">
                  {data.content}
                </p>
                <div className="flex flex-row justify-center items-center mt-4">
                  {data.button?.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="py-1 md:py-2 px-8 md:px-12 mr-2 mb-2 text-xs font-semibold text-gray-900 focus:outline-none bg-gray-100 rounded-full hover:text-slate-100 hover:bg-slate-900  focus:z-10 focus:ring-4 focus:ring-gray-200 duration-500 transition-all ease-in"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {!data.secondary && data.src && (
              <img
                src={data.src}
                className="order-2 w-full h-[40vh] object-cover object-center"
              />
            )}
            <div
              className={
                !data.secondary
                  ? "grid grid-cols-1 grid-rows-1 md:grid-rows-2 md:grid-cols-3 gap-4"
                  : "text-center w-2/3"
              }
            >
              <h1
                className={`text-2xl text-white md:text-3xl lg:text-4xl font-semibold ${!data.secondary ? "col-span-2 row-span-1" : "mb-4"}`}
              >
                {data.title}
              </h1>
              <div className="row-span-2 flex flex-col items-center justify-end gap-1.5">
                <h4
                  className={`text-slate-200 font-medium ${!data.secondary ? "text-md" : "text-lg"}`}
                >
                  {data.subtitle}
                </h4>
                <p
                  className={`text-gray-300 font-normal ${!data.secondary ? "text-sm" : "text-base"}`}
                >
                  {data.content}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-end">
              {data.button?.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="py-1 md:py-2 px-8 md:px-12 mr-2 mb-2 text-xs font-semibold text-gray-900 focus:outline-none bg-gray-100 rounded-full hover:text-slate-100 hover:bg-slate-900  focus:z-10 focus:ring-4 focus:ring-gray-200 duration-500 transition-all ease-in"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};
