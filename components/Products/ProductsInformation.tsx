import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import LinkTag from "./LinkTag";
import Image from "next/image";
import starFull from "@/public/stars/star-full.png";
import starEmpty from "@/public/stars/star-empty.png";
import starHalfEmpty from "@/public/stars/star-half-empty.png";
import { atom, useAtom } from "jotai";

export const flagCart = atom(0);
function ProductsInformation({ item }: { [key: string]: any }) {
  console.log(item);
  const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");

  const [cartq, setCartQ] = useAtom(flagCart);
  const [cartQuant, setCartQuant] = useState<number>(() => {
    try {
      return Number(localStorage.getItem("cart") || "0");
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return 0;
    }
  });

  useEffect(() => {
    if (id && id?.length > 0) {
      setCategory(id[0]);
      setProduct(id[1]);
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem("cart", cartQuant.toString());

    const timer = setTimeout(() => {
      localStorage.getItem("cart");

      const cartQuant = Number(localStorage.getItem("cart"));
      setCartQ(cartQuant);
    }, 300);
    return () => clearTimeout(timer);
  }, [cartQuant]);

  console.log(cartQuant, "CartQuantity");
  const getStars = () => {
    const stars = [];

    const rating = Math.floor(item?.rating);

    const dec = item?.rating - rating;

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <Image
            src={starFull}
            className="inline "
            key={i}
            width={20}
            alt="star"
          />
        );
      } else if (dec >= 0.5) {
        stars.push(
          <Image
            src={starHalfEmpty}
            className="inline "
            key={i}
            width={20}
            alt="star"
          />
        );
      } else {
        stars.push(
          <Image
            src={starEmpty}
            className="inline"
            key={i}
            alt="star"
            width={20}
          />
        );
      }
    }
    return stars;
  };
  const getDiscount = (dis: number): string => {
    const discount = dis;
    const total = (item?.price * 82 * discount) / 100;
    const price = item?.price * 82 - total;
    return Math.round(price).toLocaleString("en-IN", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const handle = () => {
    setCartQuant((prev) => prev + 1);
    // console.log(cartQuant);
  };

  return (
    <div className="flex-1   px-5">
      <div className="flex h-full flex-col items-start justify-start  xl:px-20 mx-auto gap-3">
        <div className="w-full hidden lg:inline-block">
          <LinkTag name="Home" /> /<LinkTag name={category} /> /{""}
          <LinkTag name={product} />/{" "}
        </div>
        <div className="border-b-2 py-2 w-full flex flex-col gap-1">
          <h1 className="capitalize text-[35px] font-semibold">
            {item?.title}
          </h1>
          <div className="flex flex-col items-start">
            <h1 className="text-[13px] font-semibold text-[#479292]">
              By {item?.brand}
            </h1>
            <div>{getStars()}</div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h1 className="inline-block text-[25px] tracking-wider font-semibold">
            <span className="text-red-500  font-serif font-normal">
              -{item?.discountPercentage || "0"}%
            </span>{" "}
            ₹{getDiscount(item?.discountPercentage) || "0"}
          </h1>
          <h1 className="inline-block text-[13px]">
            M.R.P:{" "}
            <span className="line-through">
              {" "}
              ₹
              {(item?.price * 82).toLocaleString("en-IN", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }) || "0"}
            </span>
          </h1>
        </div>
        <div className="xl:w-[70%] my-4">
          <h1 className="font-mono">
            <span className="font-semibold">Description:</span>
            {item?.description}
          </h1>
        </div>
        <button
          className="bg-black text-white py-3 w-full duration-200 transition-all ease-in-out border-2 border-black hover:bg-white hover:text-black active:scale-90 "
          onClick={handle}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductsInformation;
