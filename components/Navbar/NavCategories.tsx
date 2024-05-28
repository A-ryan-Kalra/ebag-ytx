import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface Categories {
  category?: string;
  icon1?: string;
  switchs?: boolean;
  cartq?: number;
}

function NavCategories({ cartq, category, icon1, switchs }: Categories) {
  return (
    <>
      {!switchs ? (
        <Link
          href={`/collections/${category?.toLowerCase()}`}
          className={`text-white cursor-pointer group relative  before:bg-[#0e0d0d]  before:h-[2px] before:w-[100%]  before:left-0 before:bottom-0 w-fit before:rounded-full before:inset-x-0 before:absolute before:transform hover:before:origin-left before:origin-right  before:scale-x-0 before:transition before:duration-200 decoration-none no-underline hover:before:scale-x-100 dark:before:bg-black dark:text-black hidden lg:inline-block`}
        >
          <h1 className="text-black">{category}</h1>
        </Link>
      ) : (
        <div className="cursor-pointer duration-150 transition ease-in-out rounded-full">
          <Icon
            icon={icon1 as string}
            className="text-black  inline hover:text-[#2a8085]"
            width={25}
          />
          {icon1 === "solar:cart-5-linear" && (
            <span className="text-center relative top-[2px] inline-block">
              {cartq}
            </span>
          )}
        </div>
      )}
    </>
  );
}

export default NavCategories;
