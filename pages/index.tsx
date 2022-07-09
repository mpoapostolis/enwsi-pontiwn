import { useState } from "react";

const items = [
  { url: "images/items/p1.webp", code: `p1`, type: "panofori" },
  { url: "images/items/p2.webp", code: `p2`, type: "panofori" },
  { url: "images/items/p3.webp", code: `p3`, type: "panofori" },
  { url: "images/items/p4.webp", code: `p4`, type: "panofori" },
  { url: "images/items/s1.webp", code: `s1`, type: "sortsaki" },
  { url: "images/items/s2.webp", code: `s2`, type: "sortsaki" },
  { url: "images/items/s3.webp", code: `s3`, type: "sortsaki" },
  { url: "images/items/f1.webp", code: `f1`, type: "fousta" },
  { url: "images/items/g1.webp", code: `g1`, type: "gileko" },
  { url: "images/items/g2.webp", code: `g2`, type: "gileko" },
  { url: "images/items/k1.webp", code: `k1`, type: "kapelo" },
];

function Page() {
  const [photo, setPhoto] = useState("/images/outfit/A_01_02_c.jpg");
  const [outfit, setOutfit] = useState({
    panofori: "",
    sortsaki: "",
    fousta: "",
    gileko: "",
    kapelo: "",
  });

  return (
    <div className="bg-slate-800 grid   lg:grid-cols-2 grid-cols-1 h-screen  w-screen">
      <div className="flex w-full items-center  justify-center bg-black">
        <img
          className="w-full h-full aspect-video object-scale-down"
          src={photo}
          alt=""
        />
      </div>
      <div className="p-4 overflow-auto">
        <div className="grid  xl:grid-cols-3 2xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-3 h-full w-full">
          {items.map((item) => (
            <button className=" overflow-hidden p-10 border border-base-300 h-full flex items-center justify-center  bg-base-100 shadow ">
              <img
                onClick={() =>
                  setOutfit((s) => ({ ...s, [item.type]: item.code }))
                }
                src={item.url}
                className="aspect-video object-scale-down h-full"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
