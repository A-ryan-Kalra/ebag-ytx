import React, { SetStateAction, useEffect, useState } from "react";

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
      <div
        className={`duration-200 ease-in-out transition-all bg-black p-2 text-white`}
      >
        as
      </div>
      <div className="w-full flex border-2 justify-between items-center  py-2">
        <div>womens</div>
        <div>mens</div>
      </div>
    </nav>
  );
}

export default Navigation;
