type BaseProps = {
  title: string;
  src?: string;
  id?: string;
  href?: string;
};

type SecondaryProps = BaseProps & {
  secondary: true;
  tertiary?: false;
  description?: string;
  subtitle?: string;
  badge?: string;
  ranking?: string;
  label?: never;
  onClick?: never;
};

type TertiaryProps = BaseProps & {
  tertiary: true;
  secondary?: false;
  label?: never;
  onClick?: never;
  subtitle?: never;
  description?: never;
  badge?: never;
  ranking?: never;
};

type DefaultProps = BaseProps & {
  secondary?: false;
  tertiary?: false;
  description: string;
  label: string;
  onClick?: () => void;
  subtitle: string;
  badge?: string;
  ranking?: string;
};

type CardProps = SecondaryProps | TertiaryProps | DefaultProps;

export const Card = ({
  title,
  description,
  label,
  src,
  id,
  subtitle,
  badge,
  ranking,
  secondary,
  tertiary,
  onClick,
  href,
}: CardProps) => {
  return (
    <a
      id={id}
      href={href}
      className={`
        w-full h-full flex flex-col justify-center items-start gap-4 rounded-xl bg-inherit border border-inherit shadow transition-all ease-in duration-300 group
        ${tertiary && "relative"}
        ${!href ? "cursor-default" : "cursor-pointer hover:shadow-md"}
        `}
    >
      <div
        className={`
        h-full w-full flex flex-col items-start justify-center
        ${!tertiary && "p-4"}
        `}
      >
        <span className="text-yellow-500 font-semibold text-sm">{badge}</span>
        {secondary ? (
          <>
            <img
              src={src}
              alt="card image"
              className="h-64 w-full object-cover rounded-lg my-2.5"
            />
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold text-black dark:text-white">{title}</h1>
                {ranking && 
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="text-xs font-bold ml-1">{ranking}</span>
                  </div>
                }
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">{subtitle}</p>
              <p className="text-sm text-gray-800 dark:text-gray-100 font-semibold">
                {description}
              </p>
            </div>
          </>
        ) : tertiary ? (
          <>
            <div className="h-full w-full overflow-hidden rounded-xl transition group-hover:brightness-110">
              <img
                src={src}
                alt="card image"
                className="animate-fadeIn h-full w-full object-cover transition group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 p-4 transition group-hover:translate-x-3">
              <h1 className="text-xl font-medium text-gray-100">{title}</h1>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-medium mb-1">{title}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-300">{subtitle}</p>
            <img
              src={src}
              alt="card image"
              className="h-56 w-full object-cover rounded-lg my-4"
            />
            <div className="w-full flex justify-between items-center">
              <p className="text-sm text-gray-600 dark:text-gray-500 font-semibold">
                {description}
              </p>
              <button
                type="button"
                onClick={onClick}
                className="py-1.5 px-6 text-sm font-medium text-white bg-indigo-900 rounded-full hover:bg-indigo-950 focus:ring focus:ring-indigo-200 transition"
              >
                {label}
              </button>
            </div>
          </>
        )}
      </div>
    </a>
  );
};
