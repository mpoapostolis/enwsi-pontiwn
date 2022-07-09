import { useState } from "react";
import clsx from "clsx";
const sets = {};

const panoforia = [
  { url: "images/items/p1.webp", code: `p1`, type: "panofori" },
  { url: "images/items/p2.webp", code: `p2`, type: "panofori" },
  { url: "images/items/p3.webp", code: `p3`, type: "panofori" },
  { url: "images/items/p4.webp", code: `p4`, type: "panofori" },
];

const gileka = [
  { url: "images/items/g1.webp", code: `g1`, type: "gileko" },
  { url: "images/items/g2.webp", code: `g2`, type: "gileko" },
];

const kapela = [{ url: "images/items/k1.webp", code: `k1`, type: "kapelo" }];

const sortsakia = [
  { url: "images/items/s1.webp", code: `s1`, type: "katw" },
  { url: "images/items/s2.webp", code: `s2`, type: "katw" },
  { url: "images/items/s3.webp", code: `s3`, type: "katw" },
  { url: "images/items/f1.webp", code: `s4`, type: "katw" },
];

type Outfit = "panofori" | "gileko" | "katw" | "kapelo";

function Page() {
  const [outfit, setOutfit] = useState<Record<Outfit, string | null>>({
    panofori: null,
    gileko: null,
    katw: null,
    kapelo: null,
  });

  const photoUrl = `/images/outfit/${Object.values(outfit)
    .filter((e) => e)
    .join("_")}.jpg`;

  return (
    <div className="bg-slate-800 grid gap-4 p-4   lg:grid-cols-2 grid-cols-1 h-screen  w-screen">
      <div className="flex w-full items-center  justify-center bg-black">
        <img
          className="w-full h-full aspect-video object-scale-down"
          src={photoUrl}
          alt=""
        />
      </div>
      <div className="overflow-auto grid">
        <div className="divider">Panofori</div>
        <div className="grid grid-cols-4 gap-4">
          {panoforia.map((item) => (
            <button
              onClick={() =>
                setOutfit((s) => ({
                  ...s,
                  [item.type as Outfit]:
                    item.code === s.panofori ? null : item.code,
                }))
              }
              key={item.url}
              className={clsx(
                "overflow-hidden p-6 border border-base-300 h-full flex items-center justify-center  bg-base-100 shadow ",
                {
                  "bg-base-300 border-1 border-yellow-200":
                    item.code === outfit[item?.type as Outfit],
                }
              )}
            >
              <img
                src={item.url}
                className="aspect-video object-scale-down  h-full"
              />
            </button>
          ))}
        </div>
        <div className="divider">Sortsaki</div>
        <div className="grid grid-cols-4 gap-4">
          {sortsakia.map((item) => (
            <button
              onClick={() =>
                setOutfit((s) => ({
                  ...s,
                  [item.type as Outfit]:
                    item.code === s.katw ? null : item.code,
                }))
              }
              key={item.url}
              className={clsx(
                "overflow-hidden p-6 border border-base-300 h-full flex items-center justify-center  bg-base-100 shadow ",
                {
                  "bg-base-300 border-1 border-yellow-200":
                    item.code === outfit[item?.type as Outfit],
                }
              )}
            >
              <img
                src={item.url}
                className="aspect-video object-scale-down  h-full"
              />
            </button>
          ))}
        </div>
        <div className="divider">Gileka</div>
        <div className="grid grid-cols-4 gap-4">
          {gileka.map((item) => (
            <button
              onClick={() =>
                setOutfit((s) => ({
                  ...s,
                  [item.type as Outfit]:
                    item.code === s.gileko ? null : item.code,
                }))
              }
              key={item.url}
              className={clsx(
                "overflow-hidden p-6 border border-base-300 h-full flex items-center justify-center  bg-base-100 shadow ",
                {
                  "bg-base-300 border-1 border-yellow-200":
                    item.code === outfit[item?.type as Outfit],
                }
              )}
            >
              <img
                src={item.url}
                className="aspect-video object-scale-down  h-full"
              />
            </button>
          ))}
        </div>
        <div className="divider">Kapela</div>
        <div className="grid grid-cols-4 gap-4">
          {kapela.map((item) => (
            <button
              onClick={() =>
                setOutfit((s) => ({
                  ...s,
                  [item.type as Outfit]:
                    item.code === s.kapelo ? null : item.code,
                }))
              }
              key={item.url}
              className={clsx(
                "overflow-hidden p-6 border border-base-300 h-full flex items-center justify-center  bg-base-100 shadow ",
                {
                  "bg-base-300 border-1 border-yellow-200":
                    item.code === outfit[item?.type as Outfit],
                }
              )}
            >
              <img
                src={item.url}
                className="aspect-video object-scale-down  h-full"
              />
            </button>
          ))}
        </div>
        {/* <div className="grid  xl:grid-cols-3 2xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-3 h-full w-full"> */}
        {/* {items.map((item) =>
            item?.type ? (
              <button
              onClick={() =>
                setOutfit((s) => ({
                  ...s,
                  [item.type as Outfit]:
                  item.code === s[item.type] ? null : item.code,
                }))
                }
                key={item.url}
                className={clsx(
                  "overflow-hidden p-14 border border-base-300 h-full flex items-center justify-center  bg-base-100 shadow ",
                  {
                    "bg-base-300 border-1 border-yellow-200":
                      item.code === outfit[item?.type as Outfit],
                  }
                )}
              >
                <img
                  src={item.url}
                  className="aspect-video object-scale-down h-full"
                />
              </button>
            ) : (
              <div className="divider" />
            )
          )} */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Page;
