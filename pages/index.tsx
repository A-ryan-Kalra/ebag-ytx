import ImageSlider from "@/components/ImageSlider";
import Favorites from "@/components/Favorites";
import MostPurchased from "@/components/MostPurchased";
import MiddleSection from "@/components/MiddleSection";

export default function Home() {
  return (
    <main className="relative">
      <ImageSlider />
      <Favorites />
      <MiddleSection />
      <MostPurchased />
    </main>
  );
}
