"use client";

import HeroCarousel from "@/components/hero/HeroCarousel";
import { HeroBanner } from "@/types/hero";
import { useState, useEffect } from "react";

export default function Home() {
  const [banners, setBanners] = useState<HeroBanner[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/heros");

        if (!res.ok) {
          throw new Error("Failed to fetch hero data");
        }

        const data = await res.json();
        setBanners(data.banners);
      } catch (err) {
        throw err;
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  if (isLoading) {
    return (
      <main className="max-w-7xl mx-auto pt-10 px-4">
        <div className="h-96 flex items-center justify-center">
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto pt-10 px-4">
      {/* <HeroCarousel heroBanner={banners} /> */}
      {banners.length > 0 ? (
        <HeroCarousel heroBanner={banners} />
      ) : (
        <p>No banners available</p>
      )}
    </main>
  );
}
