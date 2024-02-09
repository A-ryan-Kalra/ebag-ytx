import React, { useCallback, useState } from "react";
import Form from "./Modal";
import { Icon } from "@iconify/react";
import useLoginModal from "@/hooks/useLoginModal";
import Modal from "./Modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { signIn, signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

function LoginModal() {
  const register = useRegisterModal();
  const login = useLoginModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const onSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      try {
        setLoading(true);
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (result?.status !== 200) {
          throw new Error("Invalid Credentials");
        } else {
          toast.success("Logged in");
          setLoading(false);
          login.loginClose();
          router.reload();
        }
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    },
    [email, password, login]
  );

  const loginInput = (
    <div className="w-full flex flex-col  p-2 gap-3">
      <div className="rounded-lg flex items-center bg-black/10 focus-within:border-[3.5px] border-transparent border-[3.5px] focus-within:border-cyan-500 duration-150 transition">
        <input
          type="email"
          className="rrounded-lg p-2 bg-transparent w-full    outline-none"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
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

  const switchModal = useCallback(() => {
    login.loginClose();
    register.loginOpen();
  }, [login.loginClose, register.loginOpen]);

  return (
    <Modal
      loading={loading}
      loginInput={loginInput}
      isOpen={login.isOpen}
      loginClose={login.loginClose}
      switchModal={switchModal}
      onSubmit={onSubmit}
    />
  );
}

export default LoginModal;
