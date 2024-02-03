import Image from "next/image";
import React, { SetStateAction, useEffect, useState } from "react";
import NavCategories from "./NavCategories";
import Link from "next/link";
import NavbarUpper from "./NavbarUpper";
import { Concert_One, Geologica } from "next/font/google";

const inter = Concert_One({ subsets: ["latin"], weight: "400" });
const merei = Geologica({ subsets: ["latin"], weight: "400" });

function Navigation() {
  const [state, setState] = useState<boolean>(false);

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

  return (
    <nav
      className={`${
        state ? "-translate-y-10 " : ""
      }  z-[10] sticky top-0 bg-white duration-300  `}
    >
      <NavbarUpper />
      <div className="w-full flex border-2 justify-between items-center  py-1 px-14">
        <div className={`${merei.className} flex gap-5`}>
          <div className="flex gap-9">
            <NavCategories category="MEN" />
            <NavCategories category="WOMEN" />
            <NavCategories category="ELECTRONICS" />
          </div>
        </div>
        <Link href={"/"} className="flex  items-end px-2">
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
        <div className="flex gap-12 relative  ">
          <NavCategories category="FURNITURE" />
          <NavCategories icon1="iconamoon:search" switchs />
          <NavCategories icon1="iconamoon:profile-circle-fill" switchs />
          <NavCategories icon1="solar:cart-5-linear" switchs />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
