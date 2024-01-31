import Image from "next/image";
import { Inter } from "next/font/google";
import { signIn, signOut, useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session, status } = useSession();
  // console.log(status);
  console.log(session);
  return (
    <main className="">
      <div
        onClick={() =>
          signIn("google", {
            redirect: false,
          })
        }
      >
        sign IN
      </div>
      <div onClick={() => signOut()}>signOut</div>
    </main>
  );
}
