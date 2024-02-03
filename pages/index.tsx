import { signIn, signOut, useSession } from "next-auth/react";
import useLoginModal from "@/hooks/useLoginModal";
import ImageSlider from "@/components/ImageSlider";
import Favorites from "@/components/Favorites";
import MostPurchased from "@/components/MostPurchased";
import MiddleSection from "@/components/MiddleSection";
import { useAtom } from "jotai";
import { HamBurgerHandler } from "@/constants/data";
import MobileNavBar from "@/components/MobileNavBar";

export default function Home() {
  const login = useLoginModal();
  const [gloglaNav, setGlobalNav] = useAtom(HamBurgerHandler);

  return (
    <main className="relative">
      <ImageSlider />
      <Favorites />
      {/* <MiddleSection />
      <MostPurchased /> */}

      <div onClick={login.loginOpen}>sign IN</div>
      <div onClick={() => signOut()}>signOut</div>
    </main>
  );
}
