import { create } from "zustand";

interface FilterState {
  category: string;
  search: string;
  min: number;
  max: number;
  sort: string;
  setCategory: (v: string) => void;
  setSearch: (v: string) => void;
  setPrice: (min: number, max: number) => void;
  setSort: (v: string) => void;
}

export const useGameFilterStore = create<FilterState>((set) => ({
  category: "All",
  search: "",
  min: 0,
  max: 100,
  sort: "popular",
  setCategory: (category) => set({ category }),
  setSearch: (search) => set({ search }),
  setPrice: (min, max) => set({ min, max }),
  setSort: (sort) => set({ sort }),
}));
