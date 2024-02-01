import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import prismadb from "@/libs/prismadb";
import useLoginModal from "@/hooks/useLoginModal";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const login = useLoginModal();

  return (
    <main className="">
      <div onClick={login.loginOpen}>sign IN</div>
      <div onClick={() => signOut()}>signOut</div>
    </main>
  );
}
