import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactElement;
  secondary?: boolean;
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
    <div className="h-full w-full flex flex-col items-center justify-center">
      {data.map((item, index) => (
        <div className="py-2 border-b" key={index}>
          <button
            className="flex items-center justify-between w-full text-left font-semibold px-2 py-1"
            onClick={() => toggleAccordion(index)}
          >
            <h1 className="uppercase font-medium text-sm">{item.title}</h1>
            <svg
              className={`shrink-0 ${item.secondary && "hidden"}`}
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
          <div
            id={`accordion-text-${index}`}
            aria-labelledby={`accordion-title-${index}`}
            className={`grid text-sm overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden w-full h-full">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
