import { atom, useAtom } from "jotai";
import React, { useCallback, useEffect, useState } from "react";
import { hideScrollbar, showScrollbar } from "../../constants/hidescrollbar";
import { cart } from "../Navbar/Navigation";
import { Icon } from "@iconify/react";
import CartButton from "../Cart/CartButton";
import { flagCart } from "../Products/ProductsInformation";
import useGetCart from "@/hooks/useGetCarts";
import CartItem from "./CartItem";

function Cart() {
  const [isCartOpened, setIsCartOpened] = useAtom(cart);
  const [bar, setBar] = useState(false);
  const [cartq, setCartQ] = useAtom(flagCart);
  const [cartItems, setCartItems] = useState<Array<Object>>();
  const [cartQuant, setCartQuant] = useState<number>(0);
  const { data: orderedCarts, mutate: cartItemMutate } = useGetCart();

  useEffect(() => {
    setCartQ(0);
    cartItems?.forEach((i: any) => setCartQ((prev) => prev + i.quantity));
    localStorage.setItem("cart", cartq.toString());
  }, [cartItems, cartq]);

  console.log(cartQuant, "cartQuantity");
  useEffect(() => {
    setCartItems(orderedCarts);
  }, [orderedCarts]);
  // console.log(cartItems);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBar(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isCartOpened]);

  function handle() {
    setBar(false);
    const timer = setTimeout(() => {
      setIsCartOpened(!isCartOpened);
      showScrollbar();
    }, 1000);
    return () => clearTimeout(timer);
  }
  // console.log(cartItems?.length);
  return (
    <div
      className={` bg-[#434A4F]/90 overflow-auto fixed inset-0 z-[100] min-h-full `}
      onClick={handle}
    >
      <div
        className="bg-white shadow-lg w-full md:w-[60%] lg:w-[50%] xl:w-[31%] overflow-y-auto h-full relative ml-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full flex flex-col">
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
              <h1 className="text-[13px] text-center">
                You're <span className="font-bold">₹500</span> away from free
                shipping!
              </h1>
            </div>
          </div>
          <div className="border-2 w-[90%] mx-auto group">
            <div
              className={`border-2 border-black  ${
                bar ? "scale-x-100" : "scale-x-0"
              } duration-700 transition-all ease-in-out origin-left w-full`}
            ></div>
          </div>
          {cartItems?.length === 0 || cartItems === undefined ? (
            <div className="flex flex-col gap-6 justify-center items-center my-10">
              <h1 className="font-semibold">Your Cart is Empty</h1>
              <CartButton name="shop men's" />
              <CartButton name="shop wommen's" />
              <CartButton name="shop Electronics" />
              <CartButton name="shop Furniture" />
            </div>
          ) : (
            <div className="flex flex-col gap-3 py-2 px-4 sm:px-6 overflow-y-scroll">
              {cartItems?.map((item: any, index: number) => (
                <CartItem key={index} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
