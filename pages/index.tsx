import useLoginModal from "@/hooks/useLoginModal";
import ImageSlider from "@/components/ImageSlider";
import Favorites from "@/components/Favorites";
import MostPurchased from "@/components/MostPurchased";
import MiddleSection from "@/components/MiddleSection";
import { useAtom } from "jotai";
import { HamBurgerHandler } from "@/constants/data";

export default function Home() {
  const login = useLoginModal();
  const [gloglaNav, setGlobalNav] = useAtom(HamBurgerHandler);

  return (
    <main className="relative">
      <ImageSlider />
      <Favorites />
      <MiddleSection />
      <MostPurchased />
    </main>
  );
}
