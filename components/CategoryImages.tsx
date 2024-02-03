import Image from "next/image";
import React from "react";
import { Piazzolla } from "next/font/google";

const inter = Piazzolla({ subsets: ["latin"], weight: "600" });

interface CategoryImages {
  name?: string;
  image?: string;
}

function CategoryImages({ name, image }: CategoryImages) {
  return (
    <div className="border-2  shadow-lg rounded-xl flex flex-col justify-between overflow-hidden">
      <div className="md:h-[400px] h-[300px] hover:scale-105 duration-300 transition  ease-in-out overflow-hidden md:w-[400px] w-[350px] relative">
        <Image src={image!} className="object-cover" fill alt="img" />
      </div>
      <div className="border-t-2 my-3  h-full">
        <h1
          className={`text-center font-semibold text-[18px] ${inter.className}`}
        >
          {name}
        </h1>
      </div>
    </div>
  );
}

export default CategoryImages;
