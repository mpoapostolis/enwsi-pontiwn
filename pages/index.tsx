import clsx from "clsx";
import { useState } from "react";

// 1 eswroroxuo
// 2 gileko
// 3 panoforo
// 4 zwnari
// 5 kapelo

type Item = {
  series?: string;
  br?: boolean;
  order?: string;
  url?: string;
  name?: string;
};
const items: Item[] = [
  { series: "A", order: "01", url: "/images/items/A01.png", name: "A01" },
  { series: "B", order: "01", url: "/images/items/B01.png", name: "B01" },
  { series: "D", order: "01", url: "/images/items/D01.png", name: "D01" },

  { br: true, name: "BR" },
  { series: "C", order: "02", url: "/images/items/C02.png", name: "C02" },
  { series: "D", order: "02", url: "/images/items/D02.png", name: "D02" },

  { br: true, name: "BR" },

  { series: "A", order: "03", url: "/images/items/A03.png", name: "A03" },
  { series: "B", order: "03", url: "/images/items/B03.png", name: "B03" },
  { series: "C", order: "03", url: "/images/items/C03.png", name: "C03" },
  { series: "D", order: "03", url: "/images/items/D03.png", name: "D03" },
  { br: true, name: "BR" },

  { series: "C", order: "04", url: "/images/items/C04.png", name: "C04" },
  { series: "D", order: "04", url: "/images/items/D04.png", name: "D04" },

  { br: true, name: "BR" },
  { series: "C", order: "05", url: "/images/items/D05.png", name: "C05" },
  { series: "D", order: "05", url: "/images/items/D05.png", name: "D05" },
];

function Page() {
  const [series, setSeries] = useState<Item[]>([]);
  const [f] = series ?? [{ series: "A", order: "", url: "", name: "" }];

  const url = `/images/outfits/${f?.series}_${series
    .map((e) => e.order)
    .join("_")}_c.jpg`;
  return (
    <div className="grid gap-4 p-4   lg:grid-cols-2 grid-cols-1 h-screen  w-screen">
      <div className="flex w-full items-center  justify-center bg-black">
        <img
          className="w-full h-full aspect-video object-scale-down"
          src={url}
          alt=""
        />
      </div>
      <div className="overflow-auto grid">
        <div className="grid grid-cols-5 gap-2">
          {items.map((item) =>
            item.br ? (
              <div className="divider col-span-5">{item.name}</div>
            ) : (
              <button
                onClick={() => {
                  setSeries((s) => [...s, item]);
                }}
                key={item.url}
                className={clsx(
                  "overflow-hidden relative p-3  border disabled:opacity-20 disabled:cursor-not-allowed border-base-300 h-full flex items-center justify-center  bg-base-100 shadow "
                  // {
                  //   "bg-base-300 border-1 border-yellow-200":
                  //     item.code === outfit[item?.type as Outfit],
                  // }
                )}
              >
                <img
                  src={item.url}
                  className="aspect-video  relative -top-4 object-scale-down  h-full"
                />
                <div className="absolute bottom-0 text-center   w-full flex items-end justify-center bg-black bg-opacity-25 left-0">
                  {item?.name}
                </div>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
