import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactElement;
}

interface AccordionProps {
  data: AccordionItem[];
}

export const Accordion = ({ data }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="h-full w-full py-16">
      <div className="max-w-screen-xl mx-auto md:py-16 p-4 lg:p-0 flex h-full flex-col items-center justify-center">
        {data.map((item, index) => (
          <div className="py-2 border-b" key={index}>
            <h2>
              <button
                className="flex items-center justify-between w-full text-left font-semibold py-1"
                onClick={() => toggleAccordion(index)}
              >
                <h1 className="uppercase font-medium text-sm">{item.title}</h1>
                <svg
                  className="shrink-0 ml-8"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-300 ease-out ${
                      openIndex === index && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center rotate-90 transition duration-300 ease-out ${
                      openIndex === index && "!rotate-180"
                    }`}
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-text-${index}`}
              aria-labelledby={`accordion-title-${index}`}
              className={`grid text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
              >
                <div className="overflow-hidden w-full h-full flex flex-col justify-center items-start gap-2">
                  {item.content}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
