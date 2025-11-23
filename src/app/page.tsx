"use client";

import HeroCarousel from "@/components/hero/HeroCarousel";
import { HeroBanner } from "@/types/hero";
import { useState, useEffect } from "react";

export default function Home() {
  const [banners, setBanners] = useState<HeroBanner[]>([]);

  useEffect(() => {
    const fetchHeroData = async () => {
      const res = await fetch("/api/hero");

      const data = await res.json();
      setBanners(data.banners);
    };

    fetchHeroData();
  }, []);

  return (
    <main className="max-w-7xl mx-auto pt-10 px-4">
      <HeroCarousel heroBanner={banners} />
    </main>
  );
}
