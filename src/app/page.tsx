"use client";

import Image from "next/image";
// import Anniv from "../../public/img_anniv.png";
import Confetti from "./components/Confetti";

export default function Home() {
  function onClick() {
    alert("kamu sangat polos sekali");
    alert("lagi-lagi tertipu");
    alert("wkwkwk");
    alert("nantikan update selanjutnya");
    alert("nantikan jam 13.00 WIB");
    alert("Hari Rabu, 23 Oktober 2024");
    alert("Info ini di update jam 11");
  }

  return (
    <div className="h-screen mx-5 content-center">
      <Confetti />
      {/* <Image
          className="absolute"
          src={"/img_we_1.png"}
          alt="Happy Anniversary"
          width={100}
          height={100}
          style={{
            backgroundImage: `url(${Anniv.src})`,
            width: 100,
            height: 100,
          }}
        /> */}
      <Image
        className="mx-auto"
        src={"/img_anniv.png"}
        alt="Happy Anniversary"
        width={400}
        height={400}
      />
      <div className="text-center">
        <h1 className="font-semibold text-lg">
          <span className="text-[#fe0198] font-extrabold">One</span> Year,
        </h1>
        <h2 className="font-semibold text-lg">
          A <span className="text-[#fe0198] font-extrabold">Thousand</span>{" "}
          Beautiful Memories
        </h2>
      </div>
      <div className="flex flex-col items-center mt-10">
        <button
          onClick={onClick}
          type="button"
          className="text-white bg-gradient-to-br from-[#fe0198] to-[#0084fb] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          click me
          {/* Let{"'"}s See Memories */}
        </button>
      </div>
      {/* <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#fe0198] to-[#0084fb] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
          Purple to blue
        </span>
      </button> */}
    </div>
  );
}
