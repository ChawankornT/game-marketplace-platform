"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GameCard({ game }: { game: Game }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="card-container dark:bg-neutral-900 shadow hover:shadow-xl"
    >
      <div className="relative h-44 w-full">
        {game.image && (
          <Image
            src={game.image}
            alt=""
            fill
            className="h-40 w-full object-cover"
          />
        )}
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg">{game.title}</h3>
        <p className="text-sm text-gray-500">{game.developer}</p>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold">${game.price}</span>
          <span className="text-yellow-400">⭐ {game.rating}</span>
        </div>
      </div>
    </motion.div>
  );
}
