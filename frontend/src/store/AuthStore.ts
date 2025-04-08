import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { UserLogged } from "../types/User.types";

interface AuthState {
    user: UserLogged | null;
    setUser: (user: UserLogged) => void;
    logout: () => void;
}

//export const useAuthStore = create<AuthState>((set) => ({
   // user: null,

   // setUser: (user) => set({ user }),

   // logout: () => set({ user: null }),
//}));

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user: UserLogged) => set({ user }),
            logout: () => set({ user: null }),
        }),
        {
            name: "AuthSession",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

