import Link from "next/link";
import React from "react";

function SearchImg({ item }: { item: any }) {
  // console.log(item);
  return (
    <div className="flex flex-col hover:border-2 duration-300 transition-all ease-in-out hover:shadow-xl hover:shadow-cyan-400  hover:border-cyan-500 border-2 border-transparent">
      <Link
        href={`/products/${item?.name}/${item?.title}`}
        className="max-w-[400px]  max-h-[400px] border-2"
      >
        <img
          src={item?.thumbnail}
          alt="thumbnail"
          loading="lazy"
          className="object-cover w-[400px] h-[300px]"
        />
      </Link>
      <div className="capitalize flex flex-col font-mono gap-1 p-2">
        <h1>{item?.title}</h1>
        <h1>{item?.brand}</h1>
        <h1>
          ₹
          {(item?.price * 81).toLocaleString("en-IN", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </h1>
      </div>
    </div>
  );
}

export default SearchImg;
