import { create } from "zustand";
import { User } from "firebase/auth";

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
}));
