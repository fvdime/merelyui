interface NotFoundPageProps {
  href: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  quaternary?: boolean;
}

export const NotFoundPage = ({
  href,
  primary,
  secondary,
  tertiary,
  quaternary,
}: NotFoundPageProps) => {
  return (
    <div className="w-full h-full">
      {primary && (
        <>
          <div className="h-screen flex flex-col justify-center items-center">
            <div className="max-w-screen-sm mx-auto p-4 flex flex-row justify-between items-center text-9xl font-bold gap-4">
              <h1>4</h1>
              <span className="border-[10px] border-zinc-900 py-10 px-20 md:px-36 rounded-full" />
              <h1>4</h1>
            </div>
            <h2 className="uppercase font-semibold text-center">
              The page you are looking for does not exist or an error occurred.
            </h2>
            <a
              href={href}
              className="inline-flex items-center mt-8 px-8 py-1.5 text-sm font-semibold no-underline align-middle bg-zinc-50 border rounded-full cursor-pointer hover:bg-transparent border-zinc-900 hover:opacity-80 translation ease-in duration-300"
            >
              <svg
                className="w-4 h-4 mr-2 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
              Return Home Page
            </a>
          </div>
        </>
      )}
      {secondary && (
        <>
          <div className="h-screen flex flex-col justify-end items-center bg-zinc-950 text-white">
            <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-between items-end font-bold text-3xl md:text-6xl lg:text-8xl gap-4 uppercase">
              <div className="w-full inline-flex gap-4 items-end justify-end text-zinc-800">
                <a
                  href={href}
                  className="inline-flex items-center justify-end font-normal text-base bg-transparent cursor-pointer hover:opacity-80 text-white uppercase"
                >
                  <svg
                    className="w-4 h-4 mr-2 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                  Return Home
                </a>
                <h1 className="text-zinc-500">[404]</h1>
                <h1>This</h1>
                <h1>Page</h1>
              </div>
              <div className="inline-flex gap-4 text-zinc-800">
                <h1>could</h1>
                <h1>not</h1>
                <h1>be</h1>
                <h1>found</h1>
              </div>
            </div>
          </div>
        </>
      )}
      {tertiary && (
        <>
          <div className="h-screen flex flex-col justify-center items-center gap-4 bg-blue-900 text-white">
            <div className="max-w-screen-xl mx-auto flex flex-row justify-between items-center text-8xl gap-1 uppercase font-light">
              <h2>o</h2>
              <span className="border-2 px-12 py-12 rounded-full rotate-45">
                <span className="border-2 px-4 rounded-full rotate-45"></span>
              </span>
              <h2>PS</h2>
              <h2>!</h2>
            </div>
            <h1 className="uppercase text-l text-center px-4">
              It looks like the page you’re looking for is not exists.
            </h1>

            <a
              href={href}
              className="inline-flex items-center px-8 py-1.5 text-sm bg-transparent border rounded bg-white text-blue-900 font-semibold cursor-pointer hover:opacity-80"
            >
              <svg
                className="w-4 h-4 mr-2 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
              Return Home
            </a>
          </div>
        </>
      )}
      {quaternary && (
        <>
          <div className="h-screen flex flex-col justify-center items-center bg-zinc-950 text-white">
            <div className="max-w-screen-xl mx-auto p-4 flex flex-row justify-between items-center text-3xl md:text-6xl lg:text-8xl gap-4 uppercase font-light">
              <h2>[404]</h2>
              <h2>Page</h2>
              <h2>not</h2>
              <h2>found</h2>
            </div>

            <a
              href={href}
              className="inline-flex items-center mt-8 px-2 py-1.5 text-sm bg-transparent border-b cursor-pointer hover:opacity-80"
            >
              <svg
                className="w-4 h-4 mr-2 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
              Return Home
            </a>
          </div>
        </>
      )}
    </div>
  );
};
