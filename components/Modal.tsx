import React, { ReactNode, useState } from "react";
import { Icon } from "@iconify/react";
import useLoginModal from "@/hooks/useLoginModal";
import { signIn, signOut, useSession } from "next-auth/react";

interface LoginModal {
  loginInput: ReactNode;
  button: ReactNode;
  isOpen: boolean;
  loginClose: () => void;
  switchModal?: () => void;
}

function Modal({
  switchModal,
  loginClose,
  loginInput,
  button,
  isOpen,
}: LoginModal) {
  const login = useLoginModal();
  const [switchs, setSwitch] = useState(false);
  const { data: session, status } = useSession();
  console.log(session);
  if (!isOpen) {
    return null;
  }

  return (
    <div className="bg-black/20 fixed duration-150 transition  ease-in-out max-lg:px-10 inset-0">
      <div
        className={`${
          login.isOpen ? "translate-y-[35%]" : "translate-y-[25%]"
        } lg:w-1/2 bg-white duration-150 transition ease-in-out  rounded-xl shadow-md mx-auto max-w-lg   `}
      >
        <form className="w-full h-full flex flex-col gap-3 items-center justify-between rounded-xl p-4">
          <div className="flex items-center justify-between w-full p-2">
            <h1 className="text-3xl font-semibold cursor-default">
              {login.isOpen ? "Login" : "Register"}
            </h1>
            <div
              className="flex items-center p-1 cursor-pointer duration-150 transition rounded-full hover:bg-black/10"
              onClick={loginClose}
            >
              <Icon icon="charm:cross" width={35} />
            </div>
          </div>
          {loginInput}
          <div className="w-full flex flex-col px-10">
            {button}
            <div className="text-center cursor-default mt-2 text-gray-600 max-lg:text-[14px]">
              {login.isOpen
                ? "First time using eBag?"
                : "Already have an account?"}
              <span
                className="text-black font-semibold hover:underline cursor-pointer"
                onClick={switchModal}
              >
                {login.isOpen ? " Create an account" : " Sign in"}
              </span>
            </div>
          </div>
          <hr className="bg-gray-500 w-[90%] h-[1px] " />
          <div className="flex-col flex gap-1 w-full">
            <h1 className="text-center">
              <span>or</span>
              <br />
              Sign in with
            </h1>
            <div
              className="from-[#5ec2cf]   to-[#b055c0]   w-full p-1 rounded-full hover:scale-95 bg-gradient-to-tr cursor-pointer duration transition ease-in-out"
              onClick={() =>
                signIn("google", {
                  redirect: false,
                })
              }
            >
              <div className="bg-white p-1 mx-auto rounded-full w-fit">
                <Icon icon="devicon:google" width={30} className="" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
