"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Promotion } from "@/types/promotion";

export default function SpecialPromoBanner() {
  const [promo, setPromo] = useState<Promotion>();
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");

  // Fetch promotion
  useEffect(() => {
    try {
      setIsLoading(true);
      const fetctPromotion = async () => {
        const res = await fetch("/api/promotions");

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        console.log(data);
        setPromo(data.promotion);
      };

      fetctPromotion();
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Countdown logic
  useEffect(() => {
    if (!promo?.endDate) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const end = new Date(promo.endDate).getTime();
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft("Expired");
        clearInterval(interval);
        return;
      }

      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${h}h ${m}m ${s}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [promo]);

  if (isLoading) {
    return (
      <main className="max-w-7xl mx-auto pt-10 px-4">
        <div className="h-96 flex items-center justify-center">
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  if (!promo) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mt-16"
    >
      {/* Background image */}
      {promo.banner && (
        <Image
          src={promo.banner}
          alt={promo.title}
          fill
          className="object-cover"
        />
      )}

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-r from-orange-700/40 via-yellow-600/30 to-transparent animate-gradientMove" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 md:left-10 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          {promo.title}
        </h2>

        <p className="mt-3 text-gray-200 text-sm md:text-base max-w-md drop-shadow-md">
          {promo.subtitle}
        </p>

        <a
          href={promo.link}
          className="inline-block mt-5 px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 transition text-white font-semibold shadow-lg"
        >
          {promo.buttonText}
        </a>

        {/* Countdown */}
        <p className="mt-4 text-sm text-yellow-300 font-semibold drop-shadow">
          ⏳ Sale ends in {timeLeft}
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex gap-4">
          <a
            href={promo.link}
            className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 hover:scale-105 
                     transition-all duration-200 text-white font-semibold shadow-lg shadow-purple-500/30"
          >
            {promo.buttonText}
          </a>

          <a
            href="/special-offers"
            className="px-6 py-3 rounded-lg border border-white/20 hover:border-purple-400 
                     hover:bg-white/10 hover:scale-105 transition-all duration-200 text-white font-semibold"
          >
            View Offers
          </a>
        </div>
      </div>
    </motion.section>
  );
}
