"use client";

import { useGameFilterStore } from "@/store/game.filter.store";

export default function GameFilters() {
  const {
    category,
    setCategory,
    search,
    setSearch,
    sort,
    setSort,
    min,
    max,
    setPrice,
  } = useGameFilterStore();

  return (
    <div className="flex flex-wrap items-center gap-4 mb-4 p-4 bg-white dark:bg-neutral-900 rounded-lg shadow">
      {/* Category */}
      <select
        className="p-2 border rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>All</option>
        <option>Action</option>
        <option>RPG</option>
        <option>Strategy</option>
        <option>Sports</option>
        <option>Puzzle</option>
      </select>

      {/* Search */}
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded"
      />

      {/* Sort */}
      <select
        className="p-2 border rounded"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="popular">Popularity</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="newest">Newest</option>
      </select>

      {/* Price range */}
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={min}
          min={0}
          onChange={(e) => setPrice(Number(e.target.value), max)}
          className="w-20 p-1 border rounded"
        />
        <span>-</span>
        <input
          type="number"
          value={max}
          min={0}
          onChange={(e) => setPrice(min, Number(e.target.value))}
          className="w-20 p-1 border rounded"
        />
      </div>
    </div>
  );
}
