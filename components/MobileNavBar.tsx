import React from "react";
import { Icon } from "@iconify/react";

function MobileNavBar() {
  return (
    <div className="fixed inset-0 lg:hidden z-[20] bg-white">
      <div className="bg-white h-full  mt-[145px]  ">
        <div className="flex flex-col gap-8 justify-start items-start">
          {SideBarData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b-2 w-full px-7 py-2 "
            >
              <h1 className="">{item}</h1>
              <div>
                <Icon
                  icon="iconoir:nav-arrow-right"
                  className="inline-block"
                  width={25}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileNavBar;

export const SideBarData = [
  "MEN",
  "WOMEN",
  "ELECTRONICS",
  "FURNITURE",
  "ACCOUNT",
];
