import { atom, useAtom } from "jotai";
import React, { useCallback, useEffect, useState } from "react";
import { hideScrollbar, showScrollbar } from "../../constants/hidescrollbar";
import { Tooltip } from "@nextui-org/react";
import { cart } from "../Navbar/Navigation";
import { Icon } from "@iconify/react";
import CartButton from "../Cart/CartButton";
import { flagCart } from "../Products/ProductsInformation";
import useGetCart from "@/hooks/useGetCarts";
import CartItem from "./CartItem";
import useGetUser from "@/hooks/useGetUser";
import Link from "next/link";
import Button from "./Button";
import ClipLoader from "react-spinners/ClipLoader";

function Cart() {
  const [isCartOpened, setIsCartOpened] = useAtom(cart);
  const [bar, setBar] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [delivery, setDelivery] = useState<any>();
  const [cartq, setCartQ] = useAtom(flagCart);
  const [cartItems, setCartItems] = useState<Array<Object>>();
  const [totalMoney, setTotalMoney] = useState<number>(0);
  const {
    data: orderedCarts,
    mutate: cartItemMutate,
    isLoading,
    isValidating,
  } = useGetCart();
  const { data: user } = useGetUser();

  const [loadScreen, setLoadScreen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadScreen(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [loadScreen]);

  useEffect(() => {
    const tl = cartq > 0 ? true : false;
    setLoadScreen(tl);
    setTotalMoney(0);
    cartItems?.forEach((i: any) =>
      setTotalMoney((prev) => prev + i?.price * i?.quantity)
    );

    // localStorage.setItem("cart", cartq.toString());
  }, [cartItems, cartq]);

  useEffect(() => {
    user?.address?.forEach((i: any) => setDelivery(i));
  }, [user]);

  useEffect(() => {
    setCartItems(orderedCarts);
    cartItemMutate();
  }, [orderedCarts, cartItemMutate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBar(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isCartOpened]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200);
    return () => clearTimeout(timer);
  }, [isCartOpened]);

  const handle = useCallback(() => {
    setBar(false);

    const timer = setTimeout(() => {
      setAnimate(false);

      setTimeout(() => {
        showScrollbar();
        setIsCartOpened(!isCartOpened);
      }, 500);
    }, 500);
    return () => clearTimeout(timer);
  }, [setBar, setIsCartOpened, isCartOpened, setAnimate, showScrollbar]);

  return (
    <div
      className={` bg-[#434A4F]/90 overflow-auto overflow-x-hidden fixed inset-0 z-[200] min-h-full `}
      onClick={handle}
    >
      <div
        className={`${
          animate ? "translate-x-0" : "translate-x-[700px]"
        } duration-500 transition-all ease-in-out bg-white shadow-lg w-full md:w-[60%] lg:w-[50%] xl:w-[480px] overflow-y-auto min-h-screen relative ml-auto `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full relative  min-h-screen justify-between flex flex-col">
          <div>
            <div className="flex items-center p-2 relative">
              <div className="cursor-pointer active:scale-75" onClick={handle}>
                <Icon
                  icon={"line-md:remove"}
                  className="text-black hover:rotate-90 duration-300 ease-in-out transition "
                  width={35}
                />
              </div>
              <div className="flex flex-col mx-auto items-center">
                <div className=" p-2 flex justify-center items-center text-center ">
                  <Icon
                    icon={"solar:cart-5-linear"}
                    className="text-black inline-block"
                    width={25}
                  />{" "}
                  <span className=" inline-block">{cartq}</span>
                </div>
                {cartItems?.length == 0 || cartItems?.length === undefined ? (
                  <h1 className="text-[13px] text-center">
                    You're <span className="font-bold">₹500</span> away from
                    free shipping!
                  </h1>
                ) : (
                  <h1 className="text-[13px] text-center">
                    Congrats!<span className="font-bold"> You</span> get free
                    shipping!
                  </h1>
                )}
              </div>
            </div>
            <div className="border-2 w-[90%] mx-auto group">
              <div
                className={`border-2 border-black  ${
                  bar
                    ? "scale-x-100 duration-[0.5s]"
                    : "scale-x-0 duration-[0.5s]"
                }  transition-all ease-in-out origin-left w-full`}
              ></div>
            </div>
            {cartItems?.length === 0 || cartItems === undefined ? (
              <div className="flex flex-col gap-6 justify-center items-center my-10">
                <h1 className="font-semibold">Your Cart is Empty</h1>
                <CartButton
                  handle={handle}
                  category={"men"}
                  name="shop men's"
                />
                <CartButton
                  handle={handle}
                  category={"women"}
                  name="shop wommen's"
                />
                <CartButton
                  handle={handle}
                  category={"electronics"}
                  name="shop Electronics"
                />
                <CartButton
                  handle={handle}
                  category={"furniture"}
                  name="shop Furniture"
                />
              </div>
            ) : (
              <div className="relative  h-full ">
                <div className="flex h-[60vh]  flex-col gap-3 py-2 px-4 sm:px-6 overflow-y-scroll">
                  {cartItems?.map((item: any, index: number) => (
                    <CartItem key={index} item={item} handle={handle} />
                  ))}
                </div>
              </div>
            )}
          </div>
          {loadScreen && orderedCarts?.length === 0 && (
            <div className=" absolute top-[72px] min-h-[70vh] flex items-center  justify-center bg-white z-[100] w-full">
              <ClipLoader
                size={50}
                color="#32b79c"
                speedMultiplier={2}
                className="max-lg:translate-y-[65%] bottom-[15%] mx-auto relative max-lg:bottom-[15%] "
              />
            </div>
          )}
          {cartItems?.length !== 0 && cartItems !== undefined && (
            <div className="justify-between items-center relative border-t-2 gap-3  mb-1 h-full py-2 flex flex-col ">
              <div className="flex w-full flex-col px-3 py-1">
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold">Subtotal</h1>
                  <h1 className="">
                    ₹
                    {totalMoney.toLocaleString("en-IN", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </h1>
                </div>
                <div className="flex items-center border-b-2 my-2 justify-between">
                  <h1 className="font-semibold">Delivery Charges</h1>
                  <h1>Free</h1>
                </div>
              </div>
              <div className="flex flex-col w-full px-3">
                {delivery !== undefined && delivery !== null && (
                  <h1 className="font-semibold font-serif">
                    Items will be delivered to below delivery address ↴
                  </h1>
                )}
                {delivery !== undefined && delivery !== null ? (
                  <Tooltip
                    showArrow={true}
                    content="Update the address with a click, or leave it as it is"
                    color="primary"
                    className="bg-blue-500 rounded-full text-white p-2"
                  >
                    <Link
                      href={"/address"}
                      className="flex w-fit text-[14px] flex-wrap font-mono   hover:underline cursor-pointer"
                      onClick={handle}
                    >
                      <h1>{delivery?.name},</h1>
                      <h1>{delivery?.address},</h1>
                      <h1>{delivery?.zipcode},</h1>
                      <h1>{delivery?.country}</h1>
                    </Link>
                  </Tooltip>
                ) : (
                  <Tooltip
                    showArrow={true}
                    content="Click to add your delivery address"
                    color="primary"
                    className="bg-blue-500 rounded-full text-white p-2"
                  >
                    <Link
                      href={"/address"}
                      className="flex w-fit flex-wrap font-mono   hover:underline cursor-pointer"
                      onClick={handle}
                    >
                      Register your delivery address first before placing any
                      orders
                    </Link>
                  </Tooltip>
                )}
              </div>
              <Button
                delivery={delivery}
                totalMoney={totalMoney}
                user={user}
                orderedCarts={cartItems}
                cartItemMutate={cartItemMutate}
                handle={handle}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
