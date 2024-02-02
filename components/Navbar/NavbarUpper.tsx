import { navbarUp } from "@/constants/data";
import React, { useCallback, useState } from "react";
import { Icon } from "@iconify/react";

function NavbarUpper() {
  const [slider, setSlider] = useState(navbarUp);
  const [incre, setIncre] = useState(0);

  const sliderFun = useCallback(() => {
    if (incre === slider.length - 1) {
      setIncre(0);
    } else {
      setIncre((prev) => prev + 1);
    }
  }, [incre, setIncre, slider.length]);

  console.log(incre);

  return (
    <div
      className={`  flex items-center justify-center relative bg-black p-2 text-white`}
    >
      <h1 className="text-center text-[13px]">{slider[incre]}</h1>
      <div
        className="absolute m-auto right-[30%] cursor-pointer"
        onClick={sliderFun}
      >
        <Icon
          icon="iconoir:nav-arrow-right"
          className="inline-block"
          width={25}
        />
      </div>
    </div>
  );
}

export default NavbarUpper;
