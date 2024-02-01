import React, { ReactNode, useCallback, useState } from "react";
import { Icon } from "@iconify/react";
import useLoginModal from "@/hooks/useLoginModal";
import { signIn, signOut, useSession } from "next-auth/react";

interface LoginModal {
  loginInput: ReactNode;
  isOpen: boolean;
  loginClose: () => void;
  switchModal: () => void;
  loading: boolean;
  onSubmit: (e: any) => void;
}

function Modal({
  onSubmit,
  switchModal,
  loginClose,
  loginInput,
  isOpen,
  loading,
}: LoginModal) {
  const login = useLoginModal();

  const handleClose = useCallback(() => {
    if (loading) {
      return;
    }
    loginClose();
  }, [loading, loginClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="bg-black/20 z-[100] fixed duration-150 transition  ease-in-out max-lg:px-10 inset-0">
      <div
        className={`${
          login.isOpen ? "translate-y-[35%]" : "translate-y-[20%]"
        } lg:w-1/2 bg-white duration-150 transition ease-in-out  rounded-xl shadow-md mx-auto max-w-lg  p-3`}
      >
        <form
          onSubmit={onSubmit}
          className="w-full h-full flex flex-col gap-3 items-center justify-between rounded-xl p-4"
        >
          <div className="flex items-center justify-between w-full p-2">
            <h1 className="text-3xl font-semibold cursor-default">
              {login.isOpen ? "Login" : "Register"}
            </h1>
            <div
              className="flex items-center p-1 cursor-pointer duration-150 transition rounded-full hover:bg-black/10"
              onClick={handleClose}
            >
              <Icon icon="charm:cross" width={35} />
            </div>
          </div>
          {loginInput}
          <div className="w-full flex flex-col px-10">
            <button className="bg-teal-300 hover:bg-opacity-70 hover:scale-105 transition duration-150 font-semibold rounded-xl p-2">
              {login.isOpen ? "Login" : "Register"}
            </button>
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
        </form>
        <hr className="bg-gray-500 mx-auto w-[90%] h-[1px] " />
        <div className="flex-col flex gap-1 w-full mb-2">
          <h1 className="text-center  cursor-default">
            <span>or</span>
            <br />
            Sign in with
          </h1>
          <div
            className="from-[#5ec2cf]   to-[#b055c0] mx-auto w-[80%] p-1 rounded-full hover:scale-95 bg-gradient-to-tr cursor-pointer duration transition ease-in-out"
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
      </div>
    </div>
  );
}

export default Modal;
