import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface CollectionProps {
  [key: string]: any;
}

function CollectionImg({ img }: CollectionProps) {
  const [setImage, setSetImage] = useState("");

  const getDiscount = (dis: number): string => {
    const discount = dis;
    const total = (img?.price * 82 * discount) / 100;
    const price = img?.price * 82 - total;
    const convertedPrice = Math.round(price).toLocaleString("en-IN", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    return convertedPrice;
  };

  console.log(img);
  return (
    <div className="flex flex-col hover:rounded-2xl transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg gap-3 w-fit">
      <Link
        href={`/products/${img?.name}/${img.title}`}
        className="w-[300px]  overflow-hidden relative h-[270px] border-2"
      >
        <img
          alt="img"
          src={setImage || img?.thumbnail}
          className=" object-cover  h-full w-full"
        />
      </Link>
      <div className=" flex-col flex px-1 py-1">
        <h1 className="font-mono ">{img?.title}</h1>
        <div className="flex gap-2">
          <h1 className=" font-serif font-semibold text-[13px]">
            ₹{getDiscount(img?.discountPercentage)}
          </h1>
          <h1 className="line-through text-slate-600 font-serif font-semibold text-[13px]">
            ₹
            {(img?.price * 82).toLocaleString("en-IN", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </h1>
          <h1 className="font-serif font-semibold text-[13px]">
            {img?.discountPercentage}%
          </h1>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-center mb-3 overflow-x-auto">
        {img?.images?.map((i: any, index: number) => (
          <div
            className="w-[40px] hover:border-2 hover:border-black transition-all duration-300 ease-in-out cursor-pointer overflow-hidden relative h-[40px] border-2"
            onClick={() => setSetImage(i)}
          >
            <img alt="img" src={i} className=" object-cover h-full w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionImg;
