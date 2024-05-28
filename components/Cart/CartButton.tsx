import Link from "next/link";
import React from "react";

interface Props {
  name?: string;
  category?: string;
  handle?: () => void;
}
function CartButton({ name, category, handle }: Props) {
  return (
    <Link
      href={`/collections/${category}`}
      className=" w-1/2 border-2 hover:bg-black hover:text-white duration-200 transition-all ease-in-out border-black py-2"
      onClick={handle}
    >
      <div className="uppercase text-center font-semibold">{name}</div>
    </Link>
  );
}

export default CartButton;
