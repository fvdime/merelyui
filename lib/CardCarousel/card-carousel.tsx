import { useState } from "react";

interface CardCarouselData {
  src: string;
  href?: string;
  title?: string;
  subtitle?: string;
  target?: string;
  color: "bright" | "dark";
}

interface CardCarouselProps {
  id?: string;
  data: CardCarouselData[];
}

export const CardCarousel = ({ id, data }: CardCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 < data.length ? prev + 1 : prev));
  };

  return (
    <div id={id} className="relative w-full">
      <div className="flex items-center justify-end mb-4">
        <button
          type="button"
          onClick={handlePrev}
          className={`text-black
            ${currentIndex === 0 ? "opacity-20 cursor-default" : "hover:-translate-x-1 ease-linear duration-300 transition cursor-pointer"}
          `}
          disabled={currentIndex === 0}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={currentIndex === data.length - 1}
          className={`text-black
    ${
      currentIndex === data.length - 1
        ? "opacity-20 cursor-default"
        : "hover:translate-x-1 ease-linear duration-300 transition cursor-pointer"
    }
  `}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="w-full overflow-hidden px-16">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 20}%)` }}
        >
          {data.map((item, index) => (
            <a
              key={index}
              href={item.href ? item.href : ""}
              target={item.target}
              className={`relative w-80 h-96 flex-shrink-0 mx-4 overflow-hidden rounded-lg
              ${item.href ? "cursor-pointer" : "pointer-events-none cursor-none"}
              `}
             
            >
              <img
                src={item.src}
                className="w-full h-full transform transition duration-500 hover:scale-105 object-cover object-center"
                alt={item.title ? item.title : "image"}
              />
              <div className={`p-4 absolute bottom-0 right-0 z-10 text-end
                ${item.color === 'bright' ? "text-black" : "text-white" }
              `}
              >
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p 
                  className={item.color === 'bright' ? "text-gray-800" : "text-gray-100"}
                >
                  {item.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
