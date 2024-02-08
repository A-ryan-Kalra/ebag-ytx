import Link from "next/link";
import React from "react";
import { cart } from "../Navbar/Navigation";
import { useAtom } from "jotai";

interface Props {
  name?: string;
}
function CartButton({ name }: Props) {
  const [isCartOpened, setIsCartOpened] = useAtom(cart);

  return (
    <Link
      href={"/"}
      className=" w-1/2 border-2 hover:bg-black hover:text-white duration-200 transition-all ease-in-out border-black py-2"
      onClick={() => setIsCartOpened(!isCartOpened)}
    >
      <div className="uppercase text-center font-semibold">{name}</div>
    </Link>
  );
}

export default CartButton;
