import { style, style1 } from "@/constants/data";
import React from "react";
import { Geologica } from "next/font/google";

const inter = Geologica({ subsets: ["latin"], weight: "400" });

interface CategoryName {
  name?: string;
  selected?: string;
  setSelected?: (sel: string) => void;
}

function CategoryName({ selected, name, setSelected }: CategoryName) {
  return (
    <div
      className="lg:w-1/4 min-w-[200px]  flex"
      onClick={() => setSelected!(name!)}
    >
      <h1
        className={`${
          selected === name ? style1 : style
        }  text-2xl mx-auto cursor-pointer ${inter.className} w-fit`}
      >
        {name}
      </h1>
    </div>
  );
}

export default CategoryName;
