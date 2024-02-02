import Image from "next/image";
import React from "react";
interface CategoryImages {
  name?: string;
  image?: string;
}
function CategoryImages({ name, image }: CategoryImages) {
  return (
    <div className="border-2  shadow-lg rounded-xl flex flex-col justify-between overflow-hidden">
      <div className="h-[400px] hover:scale-105 duration-300 transition ease-in-out overflow-hidden w-[400px] relative">
        <Image src={image!} className="object-cover" fill alt="img" />
      </div>
      <div className="border-t-2 my-3  h-full">
        <h1 className="text-center font-semibold text-[18px]">{name}</h1>
      </div>
    </div>
  );
}

export default CategoryImages;
