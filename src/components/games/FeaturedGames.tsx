"use client";

import { useEffect, useState } from "react";
import { useGameFilterStore } from "@/store/game.filter.store";
import GameCard from "./GameCard";

export default function FeaturedGames() {
  const { category, search, min, max, sort } = useGameFilterStore();

  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGames = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        category,
        search,
        min: String(min),
        max: String(max),
        sort,
      });

      const res = await fetch(`/api/games?${params.toString()}`);
      const data = await res.json();
      setGames(data.games);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, [category, search, min, max, sort]);

  return (
    <div>
      {loading && <p className="text-center py-8">Loading games...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {!loading && games.map((g: Game) => <GameCard key={g.id} game={g} />)}
      </div>

      {!loading && games.length === 0 && (
        <p className="text-center py-8">No games found.</p>
      )}
    </div>
  );
}
