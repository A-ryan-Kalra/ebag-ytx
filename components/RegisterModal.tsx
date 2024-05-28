import React, { useCallback, useState } from "react";
import Form from "./Modal";
import { Icon } from "@iconify/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Modal from "./Modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

type ErrorCheck = {
  [key: string]: any;
};

function RegisterModal() {
  const register = useRegisterModal();
  const login = useLoginModal();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<ErrorCheck>();
  const [flag, setFlag] = useState(false);
  const router = useRouter();

  const onSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();

      try {
        setLoading(true);
        const result = await axios.post("/api/register", {
          name,
          username,
          email,
          password,
        });
        // console.log(result);
        const result1 = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        toast.success("Account created.");
        setLoading(false);

        register.loginClose();
        router.reload();
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong");
        setErr(error!);
        setFlag(true);
      } finally {
        setLoading(false);
      }
    },
    [name, username, email, password, register, setLoading]
  );

  //   console.log(err?.response?.data.error);
  const loginInput = (
    <div className="w-full flex flex-col  p-2 gap-3">
      <div className="rounded-lg flex items-center bg-black/10 focus-within:border-[3.5px] border-transparent border-[3.5px] focus-within:border-cyan-500 duration-150 transition">
        <input
          type="text"
          className="rrounded-lg p-2 bg-transparent w-full outline-none"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="rounded-lg flex items-center bg-black/10 focus-within:border-[3.5px] border-transparent border-[3.5px] focus-within:border-cyan-500 duration-150 transition">
        <input
          type="email"
          className="rrounded-lg p-2 bg-transparent w-full outline-none"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="rounded-lg flex items-center bg-black/10 focus-within:border-[3.5px] border-transparent border-[3.5px] focus-within:border-cyan-500 duration-150 transition">
        <input
          type="text"
          className="rrounded-lg p-2 bg-transparent w-full    outline-none"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
      {err?.response?.data.error && (
        <div className="text-red-500 text-left relative left-2 max-md:text-[13px]">
          Email is already taken please try with another email.
        </div>
      )}
    </div>
  );

  function switchModal() {
    register.loginClose();
    setEmail("");
    setPassword("");
    setName("");
    setUsername("");
    login.loginOpen();
    setFlag(false);
    setErr(undefined);
  }

  return (
    <Modal
      loginInput={loginInput}
      isOpen={register.isOpen}
      loginClose={register.loginClose}
      switchModal={switchModal}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
}

export default RegisterModal;
