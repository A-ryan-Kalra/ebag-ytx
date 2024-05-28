import React from "react";
import Image from "next/image";

interface Props {
  name?: string;
  select?: number;
  selected?: (kl?: string) => void;
  onClicked?: (kl: number) => void;
  index?: number;
}
function ProductsSideImage({
  index,
  onClicked,
  select,
  name,
  selected,
}: Props) {
  return (
    <div
      className={`border-[3px] ${
        select === index ? "border-black" : ""
      } shadow-lg duration-200 cursor-pointer overflow-hidden`}
      onClick={() => {
        selected!(name);
        onClicked!(index as number);
      }}
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
