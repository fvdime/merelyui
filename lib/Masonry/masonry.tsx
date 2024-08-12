interface DataProps {
  src: string;
  href?: string;
}

interface MasonryProps {
  data: DataProps[];
}

const gridLayouts: {
  [key: number]: {
    colSpan: string;
    rowSpan: string;
    mdColSpan?: string;
    mdRowSpan?: string;
  }[];
} = {
  7: [
    { colSpan: "col-span-3", rowSpan: "row-span-1" },
    { colSpan: "col-span-7", rowSpan: "row-span-1" },
    { colSpan: "col-span-2", rowSpan: "row-span-2" },
    { colSpan: "col-span-6", rowSpan: "row-span-2" },
    { colSpan: "col-span-2", rowSpan: "row-span-2" },
    { colSpan: "col-span-7", rowSpan: "row-span-1" },
    { colSpan: "col-span-3", rowSpan: "row-span-1" },
  ],
  8: [
    {
      colSpan: "col-span-1",
      rowSpan: "row-span-2",
      mdColSpan: "md:col-span-3",
      mdRowSpan: "md:row-span-2",
    },
    {
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      mdColSpan: "md:col-span-3",
      mdRowSpan: "md:row-span-1",
    },
    {
      colSpan: "col-span-1",
      rowSpan: "row-span-2",
      mdColSpan: "md:col-span-6",
      mdRowSpan: "md:row-span-3",
    },
    {
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      mdColSpan: "md:col-span-3",
      mdRowSpan: "md:row-span-2",
    },
    {
      colSpan: "col-span-2",
      rowSpan: "row-span-2",
      mdColSpan: "md:col-span-3",
      mdRowSpan: "md:row-span-1",
    },
    {
      colSpan: "col-span-2",
      rowSpan: "row-span-2",
      mdColSpan: "md:col-span-4",
      mdRowSpan: "md:row-span-4",
    },
    {
      colSpan: "col-span-2",
      rowSpan: "row-span-2",
      mdColSpan: "md:col-span-3",
      mdRowSpan: "md:row-span-4",
    },
    {
      colSpan: "col-span-2",
      rowSpan: "row-span-2",
      mdColSpan: "md:col-span-5",
      mdRowSpan: "md:row-span-4",
    },
  ],
  12: [
    {
      colSpan: "col-span-1",
      rowSpan: "row-span-2",
      mdRowSpan: "md:row-span-4",
    },
    {
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      mdRowSpan: "md:row-span-2",
    },
    {
      colSpan: "col-span-1",
      rowSpan: "row-span-2",
      mdRowSpan: "md:row-span-4",
    },
    {
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      mdRowSpan: "md:row-span-2",
    },
    {
      colSpan: "col-span-1",
      rowSpan: "row-span-2",
      mdRowSpan: "md:row-span-6",
    },
    {
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      mdRowSpan: "md:row-span-6",
    },
    {
      colSpan: "col-span-1",
      rowSpan: "row-span-2",
      mdRowSpan: "md:row-span-2",
    },
    {
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      mdRowSpan: "md:row-span-2",
    },
    {
      colSpan: "col-span-1",
      rowSpan: "row-span-2",
      mdRowSpan: "md:row-span-4",
    },
    {
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      mdRowSpan: "md:row-span-4",
    },
    {
      colSpan: "col-span-1",
      rowSpan: "row-span-2",
      mdRowSpan: "md:row-span-2",
    },
    {
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      mdRowSpan: "md:row-span-2",
    },
  ],
};

export const Masonry = ({ data }: MasonryProps) => {
  const layout = gridLayouts[data.length];

  if (!layout) {
    return null;
  }

  return (
    <div className="h-screen w-full flex justify-center items-center p-4">
      <div
        className={`w-full h-full grid gap-4 ${
          data.length === 7
            ? "grid-cols-10 grid-rows-4"
            : data.length === 8
            ? "grid-cols-2 grid-rows-11 md:grid-cols-12 md:grid-rows-7"
            : "grid-cols-2 md:grid-cols-4 grid-rows-9 md:grid-rows-10"
        }`}
      >
        {layout.map(({ colSpan, rowSpan, mdColSpan, mdRowSpan }, index) => (
          <div
            key={index}
            className={`
              w-full h-full relative rounded-lg 
              ${colSpan}
              ${rowSpan}
              ${mdColSpan} 
              ${mdRowSpan}
            `}
          >
            {data[index].href ? (
              <a href={data[index].href}>
                <img
                  src={data[index].src}
                  alt={`masonry image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg hover:shadow-md outline-black/20 transition ease duration-300"
                />
              </a>
            ) : (
              <img
                src={data[index].src}
                alt={`masonry image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
