import { create } from "zustand";
import { UserLogged } from "../types/User.types";

interface AuthState {
    user: UserLogged | null;
    setUser: (user: UserLogged) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,

    setUser: (user) => set({ user }),

    logout: () => set({ user: null }),
}));
