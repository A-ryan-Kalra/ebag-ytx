import useGetCart from "@/hooks/useGetCarts";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { flagCart } from "../Products/ProductsInformation";

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
    setLoad(false);
    setClose(false);
  }, [orderedCarts, cartItemMutate]);

  const [cartq, setCartQ] = useAtom(flagCart);
  // console.log(isValidating, "isValidating");

  const handleCartStatus = useCallback(
    async (str?: string) => {
      try {
        if (str === "minus") {
          if (item.quantity > 1) {
            // if (!isValidating) {
            setLoad(true);
            setCartQ((prev) => prev - 1);

            const res = await axios.put(`/api/cartstatus/${item?.id}`, {
              status: str,
            });

            localStorage.setItem("cart", `${cartq - 1}`);
            cartItemMutate();
            // }
            return 0;
          }
        } else {
          setLoad(true);
          setCartQ((prev) => prev + 1);

          const res = await axios.put(`/api/cartstatus/${item?.id}`, {
            status: str,
          });

          localStorage.setItem("cart", `${cartq + 1}`);
          cartItemMutate();
        }
      } catch (error) {
        console.error(error);
      }
    },
    [
      item?.id,
      item.quantity,
      cartItemMutate,
      isValidating,
      orderedCarts,
      setLoad,
      setCartQ,
      cartq,
    ]
  );

  const handleDelete = useCallback(async () => {
    setClose(true);
    try {
      setCartQ((prev) => prev - item?.quantity);
      const result = await axios.delete(`/api/cartstatus?orderId=${item?.id}`);
      localStorage.setItem("cart", `${cartq - item?.quantity}`);
      cartItemMutate();
    } catch (error) {
      console.error(error);
    }
  }, [
    item.quantity,
    item?.id,
    item?.quantity,
    setCartQ,
    cartq,
    cartItemMutate,
    setClose,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadScreen(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loadScreen) {
    return (
      <div className=" relative min-h-full flex items-center bg-opacity-50 justify-center bg-white z-[110] w-full">
        <ClipLoader
          size={40}
          color="#32b79c"
          speedMultiplier={2}
          className="max-lg:translate-y-[65%] bottom-[15%] mx-auto relative max-lg:bottom-[15%] "
        />
      </div>
    );
  }

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
          <button
            disabled={load}
            className=" disabled:cursor-default"
            onClick={() => handleCartStatus("minus")}
          >
            <Icon
              icon="ic:round-minus"
              className="text-gray-400 hover:text-black duration-200 transition-all ease-in-out cursor-pointer"
              width={20}
            />
          </button>
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

          <button
            disabled={load}
            className=" disabled:cursor-default"
            onClick={() => handleCartStatus("plus")}
          >
            <Icon
              icon="ic:round-plus"
              className="text-gray-400 hover:text-black duration-200 transition-all ease-in-out cursor-pointer"
              width={20}
            />
          </button>
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
