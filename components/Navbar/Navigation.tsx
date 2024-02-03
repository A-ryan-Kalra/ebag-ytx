import Image from "next/image";
import React, { SetStateAction, useEffect, useRef, useState } from "react";
import NavCategories from "./NavCategories";
import Link from "next/link";
import NavbarUpper from "./NavbarUpper";
import { Concert_One, Geologica } from "next/font/google";
import { useAtom } from "jotai";
import { HamBurgerHandler } from "@/constants/data";
import { Icon } from "@iconify/react";

const inter = Concert_One({ subsets: ["latin"], weight: "400" });
const merei = Geologica({ subsets: ["latin"], weight: "400" });

function Navigation() {
  const [state, setState] = useState<boolean>(false);
  const [ham, setHam] = useAtom(HamBurgerHandler);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setState(true);
      } else {
        setState(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [state]);

  const handle = () => {
    setHam(!ham);
  };
  const refe = useRef<HTMLInputElement>(null);

  return (
    <nav
      className={`${
        state ? "-translate-y-10 " : ""
      }  z-[100] flex flex-col border-2  sticky top-0 bg-white duration-300  `}
    >
      <NavbarUpper />
      <div className="w-full flex  justify-between items-center  py-1 px-4 lg:px-14">
        <div className={`${merei.className} hidden lg:flex gap-5`}>
          <div className="flex gap-9">
            <NavCategories category="MEN" />
            <NavCategories category="WOMEN" />
            <NavCategories category="ELECTRONICS" />
          </div>
        </div>
        <button
          onClick={handle}
          className="flex flex-col lg:hidden duration-200 justify-center items-center"
        >
          <span
            className={`bg-black duration-200 transition-all dark:bg-white block h-0.5 w-6 rounded-sm  ${
              ham ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-black  duration-200 transition-all my-0.5 dark:bg-white block h-0.5 w-6 rounded-sm ${
              ham ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-black duration-200 transition-all dark:bg-white block h-0.5 w-6 rounded-sm  ${
              ham ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
        <Link href={"/"} className="flex  items-end ">
          <div className="">
            <Image
              alt="logo"
              src={"/ebag.webp"}
              width={35}
              height={35}
              className="object-contain"
            />
          </div>
          <h1 className={`${inter.className} text-[20px]`}>Ebag</h1>
        </Link>
        <div className="gap-12 relative hidden lg:flex   ">
          <NavCategories category="FURNITURE" />
          <NavCategories icon1="iconamoon:search" switchs />
          <NavCategories icon1="iconamoon:profile-circle-fill" switchs />
          <NavCategories icon1="solar:cart-5-linear" switchs />
        </div>
        <div className="cursor-pointer duration-150 transition ease-in-out inline-block lg:hidden rounded-full">
          <Icon
            icon={"solar:cart-5-linear"}
            className="text-black  inline hover:text-[#2a8085]"
            width={25}
          />

          <span className="text-center relative top-[2px] inline-block">1</span>
        </div>
      </div>
      <div className="px-3 my-2">
        <div className="rounded-full px-3 items-center bg-black/10 flex">
          <div
            className="flex items-center"
            onClick={(e) => refe.current?.focus()}
          >
            <Icon
              icon={"iconamoon:search"}
              className="text-black bg-transparent inline hover:text-[#2a8085]"
              width={15}
            />
          </div>
          <input
            type="text"
            ref={refe}
            placeholder="Enter Search Term"
            className="rounded-full outline-none w-full font-semibold px-3 bg-transparent  "
          />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
