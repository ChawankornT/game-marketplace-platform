import HeroSection from "@/components/hero/HeroSection";
import SpecialPromoBanner from "@/components/Promotions/SpecialPromoBanner";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto pt-10 px-4">
      <HeroSection />
      <SpecialPromoBanner />
    </main>
  );
}
