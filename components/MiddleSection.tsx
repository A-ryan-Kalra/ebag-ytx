import React from "react";
import { Rozha_One, Arapey } from "next/font/google";
import Link from "next/link";

const inter = Rozha_One({ subsets: ["latin"], weight: "400" });
const inter1 = Arapey({ subsets: ["latin"], weight: "400" });

function MiddleSection() {
  return (
    <div className="my-32 flex gap-5 flex-col items-center justify-center">
      <h1 className={`text-4xl px-2 text-center ${inter.className}`}>
        Act Fast, Save Big! Offers
      </h1>
      <h1 className={`${inter1.className} text-2xl px-4 md:w-1/3 text-center`}>
        Dress to Thrill, Pay Half the Bill, 50% Off Men's & Women's Clothing!
      </h1>
      <div className="flex gap-5 w-full items-center justify-center">
        <Link
          href={"/collections/men"}
          className="bg-black shadow-xl rounded-md  hover:bg-white hover:text-black duration-200 ease-in-out hover:border-2 border-2 border-black sm:text-[16px] text-[14px] font-semibold w-[150px] py-2 px-4 text-white"
        >
          <h1 className="text-center">SHOP MEN</h1>
        </Link>
        <Link
          href={"/collections/women"}
          className="bg-black shadow-xl rounded-md hover:bg-white hover:text-black duration-200 ease-in-out hover:border-2 border-2 border-black sm:text-[16px] text-[14px] font-semibold w-[150px]  py-2 px-4 text-white"
        >
          <h1 className="text-center">SHOP WOMEN</h1>
        </Link>
      </div>
    </div>
  );
}

export default MiddleSection;
