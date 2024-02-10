import React, { useCallback, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { HamBurgerHandler } from "@/constants/data";
import { useAtom } from "jotai";
import { animat } from "./Navigation";
import Link from "next/link";

function MobileNavBar() {
  const [gloglaNav, setGlobalNav] = useAtom(HamBurgerHandler);
  const [animate, setAnimate] = useAtom(animat);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (gloglaNav) {
        setAnimate(true);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [gloglaNav]);

  const handle = useCallback(() => {
    setAnimate(false);
    const timer = setTimeout(() => {
      setGlobalNav(!gloglaNav);
    }, 300);
    return () => clearTimeout(timer);
  }, [setAnimate, gloglaNav, setGlobalNav]);

  return (
    <div
      className={`${
        animate ? "translate-y-0" : "-translate-y-[1000px]"
      } duration-300 transition-all ease-in-out fixed inset-0 lg:hidden z-[20] bg-white`}
    >
      <div className="bg-white h-full  mt-[145px]  ">
        <div className="flex flex-col gap-8 justify-start items-start">
          {SideBarData.map((item, index) => (
            <Link
              href={`/collections/${item!.toLowerCase()}`}
              key={index}
              className="flex items-center justify-between border-b-2 w-full px-7 py-2 "
              onClick={handle}
            >
              <h1 className="">{item}</h1>
              <div>
                <Icon
                  icon="iconoir:nav-arrow-right"
                  className="inline-block"
                  width={25}
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-between border-b-2 w-full px-7 py-2 my-7">
          <h1 className=" ">ACCOUNT</h1>
          <div>
            <Icon
              icon="iconoir:nav-arrow-right"
              className="inline-block"
              width={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNavBar;

export const SideBarData = ["MEN", "WOMEN", "ELECTRONICS", "FURNITURE", ,];
