import React from "react";
import Image from "next/image";

interface Props {
  name?: string;
  select?: string;
  selected?: (kl?: string) => void;
}
function ProductsSideImage({ select, name, selected }: Props) {
  console.log(select === name);
  return (
    <div
      className={`border-[3px] ${
        select === name ? "border-black" : ""
      } shadow-lg duration-200 cursor-pointer overflow-hidden`}
      onClick={() => selected!(name)}
    >
      <div className="w-[78px] relative h-[78px]">
        <Image
          alt="img"
          fill
          className="object-cover duration-200 transition-all w-full h-full"
          src={name as string}
        />
      </div>
    </div>
  );
}

export default ProductsSideImage;
