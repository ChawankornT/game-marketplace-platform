"use client";

import { motion } from "framer-motion";

export default function GameCard({ game }: { game: Game }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="bg-white dark:bg-neutral-900 rounded-lg shadow hover:shadow-xl cursor-pointer overflow-hidden"
    >
      {game.image && (
        <img src={game.image} className="h-40 w-full object-cover" />
      )}

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
