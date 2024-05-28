import React, { useCallback, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { HamBurgerHandler } from "@/constants/data";
import { useAtom } from "jotai";
import { animat } from "./Navigation";
import { signIn, signOut, useSession } from "next-auth/react";

import Link from "next/link";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";

function MobileNavBar() {
  const register = useRegisterModal();
  const login = useLoginModal();

  const [acc, setAcc] = useState(false);
  const [gloglaNav, setGlobalNav] = useAtom(HamBurgerHandler);
  const [animate, setAnimate] = useAtom(animat);
  const { data: session, status } = useSession();

  const [animate1, setAnimate1] = useState(false);
  // console.log(acc);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (gloglaNav) {
        setAnimate(true);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [gloglaNav]);

  const handle1 = useCallback(() => {
    if (acc) {
      setAnimate1(false);
      const timer = setTimeout(() => {
        setAcc(!acc);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setAcc(!acc);
    }
  }, [setAnimate1, acc, setAcc]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (acc) {
        setAnimate1(!animate1);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [acc]);

  const handle = useCallback(() => {
    setAnimate(false);
    const timer = setTimeout(() => {
      setGlobalNav(!gloglaNav);
    }, 300);
    return () => clearTimeout(timer);
  }, [setAnimate, gloglaNav, setGlobalNav]);
  const signOutHandle = useCallback(
    (e: any) => {
      e.stopPropagation();
      localStorage.removeItem("cart");

      signOut();
    },
    [signOut]
  );

  // console.log(animate1, "animate1");
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
        <div
          className="flex items-center justify-between border-b-2 w-full px-7 py-2 my-7 relative  "
          onClick={handle1}
        >
          <h1 className=" ">ACCOUNT</h1>
          <div>
            <Icon
              icon="iconoir:nav-arrow-right"
              className="inline-block"
              width={25}
            />
          </div>
          {acc && (
            <div
              className={`absolute ${
                animate1
                  ? "translate-y-0 opacity-100 duration-[0.4s]"
                  : "-translate-y-[100px] opacity-0 duration-[0.3s]"
              } transition-all flex-col w-full py-3 flex gap-3 ease-in-out top-full`}
            >
              {session ? (
                <>
                  <Link
                    href={"/orders"}
                    className="flex border-b-2 border-r-2 w-1/3 justify-between p-2  items-center"
                    onClick={handle}
                  >
                    <h1>My Order</h1>
                    <div>
                      <Icon
                        icon="iconoir:nav-arrow-right"
                        className="inline-block"
                        width={22}
                      />
                    </div>
                  </Link>
                  <Link
                    href={"/address"}
                    className="flex border-b-2 border-r-2 w-1/3 justify-between p-2 items-center"
                    onClick={handle}
                  >
                    <h1>My Address</h1>
                    <div>
                      <Icon
                        icon="iconoir:nav-arrow-right"
                        className="inline-block"
                        width={22}
                      />
                    </div>
                  </Link>
                  <div
                    className="flex border-b-2 border-r-2 w-1/3 justify-between p-2 items-center"
                    onClick={signOutHandle}
                  >
                    <h1>Sign Out</h1>
                    <div>
                      <Icon
                        icon="iconoir:nav-arrow-right"
                        className="inline-block"
                        width={22}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="flex border-b-2 border-r-2 w-1/3 justify-between p-2  items-center"
                    onClick={register.loginOpen}
                  >
                    <h1>Sign in</h1>
                    <div>
                      <Icon
                        icon="iconoir:nav-arrow-right"
                        className="inline-block"
                        width={22}
                      />
                    </div>
                  </div>
                  <div
                    className="flex border-b-2 border-r-2 w-1/3 justify-between p-2 items-center"
                    onClick={login.loginOpen}
                  >
                    <h1>Log in</h1>
                    <div>
                      <Icon
                        icon="iconoir:nav-arrow-right"
                        className="inline-block"
                        width={22}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileNavBar;

export const SideBarData = ["MEN", "WOMEN", "ELECTRONICS", "FURNITURE", ,];
