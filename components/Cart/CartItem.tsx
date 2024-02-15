import useGetCart from "@/hooks/useGetCarts";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface cartItem {
  [key: string]: any;
}
function CartItem({ item, handle }: cartItem) {
  const {
    data: orderedCarts,
    mutate: cartItemMutate,
    isLoading,
    isValidating,
  } = useGetCart();

  const [load, setLoad] = useState(false);
  const [close, setClose] = useState(false);
  const [loadScreen, setLoadScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadScreen(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  console.log(isValidating);
  useEffect(() => {
    setLoad(false);
    setClose(false);
    // console.log(load, item?.title);
  }, [orderedCarts, cartItemMutate]);
  // console.log(load, item?.title);

  const handleCartStatus = useCallback(
    async (str?: string) => {
      setLoad(true);
      const res = await axios.put(`/api/cartstatus/${item?.id}`, {
        status: str,
      });
      cartItemMutate();
    },
    [item?.id, cartItemMutate, orderedCarts, setLoad]
  );

  const handleDelete = useCallback(async () => {
    setClose(true);
    const result = await axios.delete(`/api/cartstatus?orderId=${item?.id}`);
    cartItemMutate();
  }, [item, cartItemMutate, setClose]);

  if (loadScreen) {
    return (
      <div className=" relative min-h-full flex items-center bg-opacity-50 justify-center bg-white z-[100] w-full">
        <ClipLoader
          size={40}
          color="#32b79c"
          speedMultiplier={2}
          className="max-lg:translate-y-[65%] bottom-[15%] mx-auto relative max-lg:bottom-[15%] "
        />
      </div>
    );
  }
  console.log(isValidating);
  return (
    <div className=" flex border-b-2 py-3 items-start gap-3 justify-start relative">
      {close && (
        <div className="absolute top-0 min-h-full flex items-center bg-opacity-50 justify-center bg-white z-[100] w-full">
          <ClipLoader
            size={40}
            color="#32b79c"
            speedMultiplier={2}
            className="max-lg:translate-y-[65%] bottom-[15%] mx-auto relative max-lg:bottom-[15%] "
          />
        </div>
      )}
      <Link
        href={`/products/${item.categories}/${item.title}`}
        className="relative min-w-[100px] min-h-[100px] "
        onClick={handle}
      >
        <Image alt="img" src={item?.thumbnail} fill className="object-cover " />
      </Link>
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col justify-start items-start ">
          <h1 className="capitalize font-semibold text-[15px]">
            {item?.title}
          </h1>
          <h1 className="font-mono">{item?.brand}</h1>
        </div>
        <div className="flex items-center border-2 gap-3  w-fit">
          <div onClick={() => handleCartStatus("minus")}>
            <Icon
              icon="ic:round-minus"
              className="text-gray-400 hover:text-black duration-200 transition-all ease-in-out cursor-pointer"
              width={20}
            />
          </div>
          {!load ? (
            <span className="text-[15px] cursor-default font-bold">
              {item?.quantity}
            </span>
          ) : (
            <div className=" flex items-center relative  ">
              <ClipLoader
                size={18}
                color="#36d7b7"
                speedMultiplier={2}
                className="max-lg:translate-y-[65%] bottom-[15%] mx-auto relative max-lg:bottom-[15%] "
              />
            </div>
          )}

          <div onClick={() => handleCartStatus("plus")}>
            <Icon
              icon="ic:round-plus"
              className="text-gray-400 hover:text-black duration-200 transition-all ease-in-out cursor-pointer"
              width={20}
            />
          </div>
        </div>
      </div>
      <div className="flex h-full ml-auto flex-col justify-between items-center">
        <div className="cursor-pointer active:scale-75" onClick={handleDelete}>
          <Icon
            icon={"entypo:cross"}
            className="text-black hover:rotate-90 duration-300 ease-in-out transition "
            width={18}
          />
        </div>
        <div className="flex items-center cursor-default justify-center">
          <span>₹</span>
          <h1 className="text-[14px] ">
            {(item.price * item.quantity).toLocaleString("en-IN", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
