import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useAtom } from "jotai";
import { filter1 } from "@/pages/collections/[id]";
import { Icon } from "@iconify/react";

function Filter() {
  const [filterImg, setFilterImg] = useAtom(filter1);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (filterImg) {
        setAnimate(true);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [filterImg]);
  function handle() {
    setAnimate(false);
    const timer = setTimeout(() => {
      setFilterImg(!filterImg);
    }, 300);
    return () => clearTimeout(timer);
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-[100]" onClick={handle}>
      <div
        className={`${
          animate
            ? "translate-y-0 duration-[0.3s] transition-all ease-in-out"
            : "-translate-y-[1000px] duration-[0.5s] transition-all ease-in-out"
        } bg-white relative  `}
        onClick={(e: any) => e.stopPropagation()}
      >
        <div
          className="relative px-4 bg-white border-b-2 border-black"
          onClick={handle}
        >
          <Icon
            icon="formkit:arrowup"
            width={25}
            className="rounded-full hover:bg-[#efebeb] cursor-pointer"
          />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default Filter;
