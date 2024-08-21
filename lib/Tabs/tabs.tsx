import React, { useState } from "react";

interface DataProps {
  label: string;
  icon?: React.ReactElement;
  content: React.ReactElement;
}

interface TabProps {
  id?: string;
  data: DataProps[];
  secondary?: boolean;
  theme?: string;
}

export const Tabs = ({ id, data, secondary, theme }: TabProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeClasses = secondary
    ? "bg-base dark:bg-base text-base dark:text-inverted border-inverted dark:border-base"
    : "border-b-2 text-base dark:hover:text-soft border-inverted dark:border-base";

  const inActiveClasses = secondary
    ? "text-muted dark:text-soft hover:text-soft dark:hover:text-muted"
    : "text-muted dark:text-soft hover:text-soft dark:hover:text-muted hover:border-b-2 hover:border-inverted dark:hover:border-base";

  return (
    <section id={id} className={theme}>
      <div className="mb-4 border-b">
        <ul className="flex flex-wrap -mb-px font-medium text-center">
          {data.map((tab, index) => (
            <li key={index} className="mx-1">
              <button
                className={`inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-t-lg transition duration-500 ease-in-out ${
                  activeTab === index ? activeClasses : inActiveClasses
                }`}
                onClick={() => setActiveTab(index)}
                id={`tab-${index}`}
              >
                {tab.icon}
                <h1>{tab.label}</h1>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="tab-content">
        {data.map((tab, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              activeTab === index ? "block" : "hidden"
            }`}
            id={`tab-content-${index}`}
          >
            <>{tab.content}</>
          </div>
        ))}
      </div>
    </section>
  );
};
