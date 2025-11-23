import FeaturedGames from "@/components/games/FeaturedGames";
import GameFilters from "@/components/games/GameFilters";

export default function GamesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 pt-10">
      <h1 className="text-3xl font-bold mb-6">Featured Games</h1>

      <GameFilters />
      <FeaturedGames />
    </main>
  );
}
