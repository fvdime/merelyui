import { useState } from "react";

interface CarouselData {
  href?: string;
  src: string;
  title?: string;
  subtitle?: string;
  target?: string;
}

interface CarouselProps {
  id?: string;
  data: CarouselData[];
  secondary?: boolean;
}

export const Carousel = ({ id, data, secondary }: CarouselProps) => {
  const [active, setActive] = useState<number>(0);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % data.length);
  };

  return (
    <div id={id} className="relative w-full">
      <div className="relative h-96 overflow-hidden rounded">
        <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out">
          {data.map((item, index) => (
            <a
              key={index}
              href={item.href ? item.href : ""}
              className={`absolute w-full h-full transition-opacity duration-700 ease-in-out
              ${active === index ? "opacity-100" : "opacity-0"}
              ${item.href ? "cursor-pointer" : "pointer-events-none cursor-none"}
              `}
              style={{
                transform: `translateX(${(index - active) * 100}%)`,
              }}
            >
              <img
                src={item.src}
                className="block w-full object-cover object-center"
                alt={item.title ? item.title : "image"}
              />
            </a>
          ))}
        </div>
      </div>
      <ul
        className={`
        flex flex-row items-center justify-center gap-2
        ${secondary ? "mt-1" : "absolute bottom-4 left-1/2 right-1/2 "}
      `}
      >
        {data.map((item, index) => (
          <li key={index}>
            <button
              className={`
                  p-1 rounded-full
                  ${active === index ? "bg-black" : "bg-gray-400 hover:bg-gray-500"}
                `}
              onClick={() => setActive(index)}
              aria-label={item?.title}
            />
          </li>
        ))}
      </ul>
      {!secondary && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            className="absolute top-1/2 transform -translate-y-1/2 left-0 z-30 flex items-center justify-center h-10 w-10 bg-white/30 rounded-full"
          >
            <svg
              className="w-5 h-5 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute top-1/2 transform -translate-y-1/2 right-0 z-30 flex items-center justify-center h-10 w-10 bg-white/30 rounded-full"
          >
            <svg
              className="w-5 h-5 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </>
      )}
    </div>
  );
};
