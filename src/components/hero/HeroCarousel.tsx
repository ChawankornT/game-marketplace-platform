"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HeroProps } from "@/types/hero";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroCarousel({ heroBanner }: HeroProps) {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const current = heroBanner[index];

  // Auto play every 5s
  useEffect(() => {
    if (pause) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroBanner.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [pause, heroBanner.length]);

  // parallax handler
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // depth = 20px
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setParallax({ x, y });
  }

  const next = () => setIndex((i) => (i + 1) % heroBanner.length);
  const prev = () =>
    setIndex((i) => (i - 1 + heroBanner.length) % heroBanner.length);

  return (
    <div
      className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden rounded-xl"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => {
        setPause(false);
        setParallax({ x: 0, y: 0 });
      }}
    >
      {/* Image animation */}
      {current.imageUrl && (
        <AnimatePresence>
          <motion.img
            key={current.id}
            src={current.imageUrl}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1, x: parallax.x, y: parallax.y }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      )}

      {/* Overlay gradient */}
      <div
        className={`absolute inset-0 ${
          current.gradient ?? "bg-linear-to-r from-black/80 to-transparent"
        }`}
      />

      {/* Content */}
      <div className="absolute bottom-12 left-12 text-white">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold mb-2"
        >
          {current.title}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-lg mb-4 text-lg"
        >
          {current.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href={current.ctaLink}
            className="px-6 py-3 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
          >
            {current.ctaText}
          </Link>
        </motion.div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/60"
      >
        <ChevronLeft size={30} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/60"
      >
        <ChevronRight size={30} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {heroBanner.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
