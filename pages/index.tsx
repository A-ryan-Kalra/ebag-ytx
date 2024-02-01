import Image from "next/image";
import { Inter } from "next/font/google";
import { signIn, signOut, useSession } from "next-auth/react";
import prismadb from "@/libs/prismadb";
import useLoginModal from "@/hooks/useLoginModal";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const login = useLoginModal();

  return (
    <main className="">
      <div
        onClick={
          // () =>
          // signIn("google", {
          //   redirect: false,
          // })
          login.loginOpen
        }
      >
        sign IN
      </div>
      <div onClick={() => signOut()}>signOut</div>
    </main>
  );
}
