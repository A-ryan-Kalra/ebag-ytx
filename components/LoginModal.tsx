import React, { useState } from "react";
import Form from "./Modal";
import { Icon } from "@iconify/react";
import useLoginModal from "@/hooks/useLoginModal";
import Modal from "./Modal";
import useRegisterModal from "@/hooks/useRegisterModal";

function LoginModal() {
  const register = useRegisterModal();
  const login = useLoginModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);

  const loginInput = (
    <div className="w-full flex flex-col  p-2 gap-3">
      <div className="rounded-lg flex items-center bg-black/10 focus-within:border-[3.5px] border-transparent border-[3.5px] focus-within:border-cyan-500 duration-150 transition">
        <input
          type="email"
          className="rrounded-lg p-2 bg-transparent w-full    outline-none"
          placeholder="Email"
        />
      </div>
      <div className="rounded-lg flex items-center bg-black/10 focus-within:border-[3.5px] border-transparent border-[3.5px] focus-within:border-cyan-500 duration-150 transition">
        {!passwordShow ? (
          <input
            type="password"
            className="rounded-lg p-2 bg-transparent w-full    outline-none"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        ) : (
          <input
            type="text"
            className="rounded-lg p-2 bg-transparent w-full    outline-none"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        )}
        <div
          className="p-2 bg-transparent cursor-pointer  transition-all "
          onClick={() => setPasswordShow(!passwordShow)}
        >
          {passwordShow ? (
            <Icon
              icon="akar-icons:eye-open"
              width={25}
              className="duration-[2s] transition ease-in-out"
            />
          ) : (
            <Icon
              icon="ph:eye-closed"
              width={25}
              className="duration-[2s] transition ease-in-out"
            />
          )}
        </div>
      </div>
    </div>
  );

  const button = (
    <button className="bg-teal-300 hover:bg-opacity-70 hover:scale-105 transition duration-150 font-semibold rounded-xl p-2">
      Login
    </button>
  );

  function switchModal() {
    login.loginClose();
    register.loginOpen();
  }
  return (
    <Modal
      loginInput={loginInput}
      button={button}
      isOpen={login.isOpen}
      loginClose={login.loginClose}
      switchModal={switchModal}
    />
  );
}

export default LoginModal;
