import { useState } from "react";

function Page() {
  const [photo, setPhoto] = useState("/D850-20220603-12_57_03@70 mm.jpg");
  const [type, setType] = useState("");
  return (
    <div className="bg-slate-800 h-screen  w-screen">
      <div className="grid p-10  lg:grid-cols-[1fr_2fr] grid-cols-1  gap-4 ">
        <div className="w-full h-full text-white  rounded-l-2xl bg-black">
          <img
            className="w-full h-[90vh] object-scale-down   rounded-l-2xl"
            src={photo}
            alt=""
          />
        </div>

        {/* filters */}
        <div className="  w-full bg-slate-700  rounded-r-2xl p-4">
          <div className="tabs font-extrabold">
            <a
              onClick={() => setType("blouza")}
              className={`tab tab-lifted ${
                type === "blouza" ? "tab-active" : ""
              } `}
            >
              Μπλούζα
            </a>
            <a
              onClick={() => setType("panteloni")}
              className={`tab tab-lifted ${
                type === "panteloni" ? "tab-active" : ""
              } `}
            >
              Παντελόνι
            </a>
            <a
              onClick={() => setType("forema")}
              className={`tab tab-lifted ${
                type === "forema" ? "tab-active" : ""
              } `}
            >
              Φόρεμα
            </a>
            <a
              onClick={() => setType("fousta")}
              className={`tab tab-lifted ${
                type === "fousta" ? "tab-active" : ""
              } `}
            >
              Φούστα
            </a>
          </div>

          <div className="grid gap-2 h-[87vh]  overflow-y-auto grid-cols-6">
            {[].map((a) => (
              <div className="bg-slate-600 border hover:border-amber-400 cursor-pointer h-full w-full">
                <img className="w-full h-40 " alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
