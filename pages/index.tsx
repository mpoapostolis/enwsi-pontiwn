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
  lvl?: number;
  url?: string;
  name?: string;
};
const items: Item[] = [
  {
    series: "A",
    order: "01",
    url: "/images/items/A01.png",
    lvl: 1,
    name: "A01",
  },
  {
    series: "B",
    order: "01",
    url: "/images/items/B01.png",
    lvl: 1,
    name: "B01",
  },
  {
    series: "D",
    order: "01",
    url: "/images/items/D01.png",
    lvl: 1,
    name: "D01",
  },

  {
    series: "C",
    order: "02",
    url: "/images/items/C02.png",
    lvl: 2,
    name: "C02",
  },
  {
    series: "D",
    order: "02",
    url: "/images/items/D02.png",
    lvl: 2,
    name: "D02",
  },

  {
    series: "A",
    order: "03",
    url: "/images/items/A03.png",
    lvl: 3,
    name: "A03",
  },
  {
    series: "B",
    order: "03",
    url: "/images/items/B03.png",
    lvl: 3,
    name: "B03",
  },
  {
    series: "C",
    order: "03",
    url: "/images/items/C03.png",
    lvl: 3,
    name: "C03",
  },
  {
    series: "D",
    order: "03",
    url: "/images/items/D03.png",
    lvl: 3,
    name: "D03",
  },

  {
    series: "C",
    order: "04",
    url: "/images/items/C04.png",
    lvl: 4,
    name: "C04",
  },
  {
    series: "D",
    order: "04",
    url: "/images/items/D04.png",
    lvl: 4,
    name: "D04",
  },

  {
    series: "C",
    order: "05",
    url: "/images/items/C05.png",
    lvl: 5,
    name: "C05",
  },
  {
    series: "D",
    order: "05",
    url: "/images/items/D05.png",
    lvl: 5,
    name: "D05",
  },
];

const outfits = [
  "A_01_02_c",
  "A_01_02_l",
  "A_01_02_r",
  "A_01_03_c",
  "A_01_03_l",
  "A_01_03_r",
  "A_01_c",
  "A_01_l",
  "A_01_r",
  "A_03_c",
  "A_03_l",
  "A_03_r",
  "B_01_03_c",
  "B_01_03_l",
  "B_01_03_r",
  "B_01_c",
  "B_01_l",
  "B_01_r",
  "B_03_c",
  "B_03_l",
  "B_03_r",
  "C_02_03_04_05_c",
  "C_02_03_04_05_l",
  "C_02_03_04_05_r",
  "C_02_03_05_c",
  "C_02_03_05_l",
  "C_02_03_05_r",
  "C_02_03_c",
  "C_02_03_l",
  "C_02_03_r",
  "C_02_c",
  "C_02_l",
  "C_02_r",
  "C_03_c",
  "C_03_l",
  "C_03_r",
  "C_04_c",
  "C_04_l",
  "C_04_r",
  "D_01_02_03_04_05_c",
  "D_01_02_03_04_05_l",
  "D_01_02_03_04_05_r",
  "D_01_c",
  "D_01_l",
  "D_01_r",
  "D_02_04_c",
  "D_02_04_l",
  "D_02_04_r",
  "D_02_c",
  "D_02_l",
  "D_02_r",
  "D_03_c",
  "D_03_l",
  "D_03_r",
  "D_04_c",
  "D_04_l",
  "D_04_r",
];

function Page() {
  const [series, setSeries] = useState<Item[]>([
    {
      series: "A",
      order: "01",
      url: "/images/items/A01.png",
      lvl: 1,
      name: "A01",
    },
  ]);
  const [f] = series ?? [
    {
      series: "A",
      order: "01",
      url: "/images/items/A01.png",
      lvl: 1,
      name: "A01",
    },
  ];
  const [suffix, setSuffix] = useState<string>("c");
  const [bck, setBck] = useState<string>();
  const url = `/images/outfits/${f?.series}_${series
    .map((e) => e.order)
    .join("_")}_${suffix}.jpg`;
  return (
    <div className="grid gap-4 p-4    lg:grid-cols-2  grid-cols-1 h-screen  w-screen">
      <div className="flex select-none w-full flex-col items-center relative  justify-center bg-black">
        <div className="grid grid-cols-2 gap-1 w-full">
          <button
            onClick={() => {
              let suf = "c";
              if (suffix === "r") suf = "c";
              if (suffix === "c") suf = "l";
              setSuffix(suf);
            }}
            disabled={suffix === "l"}
            className="btn w-full disabled:cursor-not-allowed  rounded-none"
          >
            ⬅️
          </button>
          <button
            disabled={suffix === "r"}
            onClick={() => {
              let suf = "c";
              if (suffix === "l") suf = "c";
              if (suffix === "c") suf = "r";
              setSuffix(suf);
            }}
            className="btn w-full disabled:cursor-not-allowed  rounded-none"
          >
            ➡️
          </button>
        </div>
        <img
          className="w-full h-full aspect-video object-scale-down"
          src={url}
          alt=""
          onError={(e) => {
            e.currentTarget.src =
              "https://s2.svgbox.net/materialui.svg?ic=error_outline&color=aaa";
          }}
        />
        <button
          onClick={() => setSeries([items[0]])}
          className="btn col-span-2 top-0 rounded-none right-0 w-full"
        >
          Reset
        </button>
      </div>
      <div className="overflow-auto grid">
        <div className="grid grid-cols-4 gap-2">
          {items.map((item) =>
            item.br ? (
              <div key={Math.random()} className="divider col-span-5">
                {item.name}
              </div>
            ) : (
              <button
                onClick={() => {
                  const doIhaveIt = series
                    .map((e) => e.name)
                    .includes(item.name);
                  if (doIhaveIt)
                    return setSeries((e) =>
                      e.filter((e) => e.name !== item.name)
                    );
                  const [f] = series;
                  const code = `${f?.series}_${series
                    .map((e) => e.order)
                    .join("_")}_${suffix}`;
                  const s = f?.series ?? "A";
                  if (s !== item.series) setSeries([item]);
                  else {
                    setSeries((s) =>
                      [...s, item].sort((a, b) => (a.lvl ?? 0) - (b.lvl ?? 0))
                    );
                  }
                }}
                key={item.url}
                className={clsx(
                  "overflow-hidden relative p-3  border disabled:opacity-20 disabled:cursor-not-allowed border-base-300 h-full flex items-center justify-center  bg-base-100 shadow ",
                  {
                    "bg-base-300 border-1 border-yellow-200": series
                      .map((e) => e.name)
                      .includes(item.name),
                  }
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
