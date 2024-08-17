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
}

export const Tabs = ({ id, data, secondary }: TabProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeClasses = secondary
    ? "bg-black text-black dark:text-white hover:text-gray-200 border-black dark:border-white"
    : "border-b-2 text-black dark:text-white hover:text-gray-500 border-black dark:border-white";

  const inActiveClasses = secondary
    ? "text-gray-500 hover:text-gray-600"
    : "text-gray-500 hover:text-gray-600 hover:border-b-2 hover:border-gray-300";

  return (
    <>
      <div id={id} className="mb-4 border-b">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
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
    </>
  );
};
