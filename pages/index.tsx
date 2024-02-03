import { signIn, signOut, useSession } from "next-auth/react";
import useLoginModal from "@/hooks/useLoginModal";
import ImageSlider from "@/components/ImageSlider";
import Favorites from "@/components/Favorites";
import MostPurchased from "@/components/MostPurchased";
import MiddleSection from "@/components/MiddleSection";

export default function Home() {
  const login = useLoginModal();

  return (
    <main className="">
      <ImageSlider />
      <Favorites />
      <MiddleSection />
      <MostPurchased />
      <div onClick={login.loginOpen}>sign IN</div>
      <div onClick={() => signOut()}>signOut</div>
    </main>
  );
}
