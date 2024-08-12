interface DataProps {
  src: string;
  href?: string;
}

interface MasonryProps {
  data: DataProps[];
}

const gridLayouts: {
  [key: number]: {
    colSpan: number;
    rowSpan: number;
    mdColSpan?: number;
    mdRowSpan?: number;
  }[];
} = {
  7: [
    { colSpan: 3, rowSpan: 1 },
    { colSpan: 7, rowSpan: 1 },
    { colSpan: 2, rowSpan: 2 },
    { colSpan: 6, rowSpan: 2 },
    { colSpan: 2, rowSpan: 2 },
    { colSpan: 7, rowSpan: 1 },
    { colSpan: 3, rowSpan: 1 },
  ],
  8: [
    { colSpan: 1, rowSpan: 2, mdColSpan: 3, mdRowSpan: 2 },
    { colSpan: 1, rowSpan: 1, mdColSpan: 3, mdRowSpan: 1 },
    { colSpan: 1, rowSpan: 2, mdColSpan: 6, mdRowSpan: 3 },
    { colSpan: 1, rowSpan: 1, mdColSpan: 3, mdRowSpan: 2 },
    { colSpan: 2, rowSpan: 2, mdColSpan: 3, mdRowSpan: 1 },
    { colSpan: 2, rowSpan: 2, mdColSpan: 4, mdRowSpan: 4 },
    { colSpan: 2, rowSpan: 2, mdColSpan: 3, mdRowSpan: 4 },
    { colSpan: 2, rowSpan: 2, mdColSpan: 5, mdRowSpan: 4 },
  ],
  12: [
    { colSpan: 1, rowSpan: 2, mdRowSpan: 4 },
    { colSpan: 1, rowSpan: 1, mdRowSpan: 2 },
    { colSpan: 1, rowSpan: 2, mdRowSpan: 4 },
    { colSpan: 1, rowSpan: 1, mdRowSpan: 2 },
    { colSpan: 1, rowSpan: 2, mdRowSpan: 6 },
    { colSpan: 1, rowSpan: 1, mdRowSpan: 6 },
    { colSpan: 1, rowSpan: 2, mdRowSpan: 2 },
    { colSpan: 1, rowSpan: 1, mdRowSpan: 2 },
    { colSpan: 1, rowSpan: 2, mdRowSpan: 4 },
    { colSpan: 1, rowSpan: 1, mdRowSpan: 4 },
    { colSpan: 1, rowSpan: 2, mdRowSpan: 2 },
    { colSpan: 1, rowSpan: 1, mdRowSpan: 2 },
  ],
};

export const Masonry = ({ data }: MasonryProps) => {
  console.log("Data:", data);

  const layout = gridLayouts[data.length];

  console.log("Layout:", layout);
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
        {data.length === 7 && (
          <>
            <div className="col-span-3 row-span-1">
              <img src={data[0].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-7 row-span-1">
              <img src={data[1].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-2 row-span-2">
              <img src={data[2].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-6 row-span-2">
              <img src={data[3].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-2 row-span-2">
              <img src={data[4].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-7 row-span-1">
              <img src={data[5].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-3 row-span-1">
              <img src={data[6].src} className="w-full h-full object-cover rounded-lg" />
            </div>
          </>
        )}

        {data.length === 8 && (
          <>
            <div className="col-span-1 row-span-2 md:col-span-3 md:row-span-2">
              <img src={data[0].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-1 row-span-1 md:col-span-3 md:row-span-1">
              <img src={data[1].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-1 row-span-2 md:col-span-6 md:row-span-3">
              <img src={data[2].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-1 row-span-1 md:col-span-3 md:row-span-2">
              <img src={data[3].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-2 row-span-2 md:col-span-3 md:row-span-1">
              <img src={data[4].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-2 row-span-2 md:col-span-4 md:row-span-4">
              <img src={data[5].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-2 row-span-2 md:col-span-3 md:row-span-4">
              <img src={data[6].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-2 row-span-2 md:col-span-5 md:row-span-4">
              <img src={data[7].src} className="w-full h-full object-cover rounded-lg" />
            </div>
          </>
        )}

        {data.length === 12 && (
          <>
            <div className="col-span-1 row-span-2 md:row-span-4">
              <img src={data[0].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-1 row-span-1 md:row-span-2">
              <img src={data[1].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-1 row-span-2 md:row-span-4">
              <img src={data[2].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-1 row-span-1 md:row-span-2">
              <img src={data[3].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-1 row-span-2 md:row-span-6">
              <img src={data[4].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-1 row-span-1 md:row-span-6">
              <img src={data[5].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-1 row-span-2 md:row-span-2">
              <img src={data[6].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-1 row-span-1 md:row-span-2">
              <img src={data[7].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-1 row-span-2 md:row-span-4">
              <img src={data[8].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-1 row-span-1 md:row-span-4">
              <img src={data[9].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-1 row-span-2 md:row-span-2">
              <img src={data[10].src} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-1 row-span-1 md:row-span-2">
              <img src={data[11].src} className="w-full h-full object-cover rounded-lg" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};