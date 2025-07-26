import { create } from "zustand";
import { UserLogged } from "../types/User.types";

interface AuthState {
    user: UserLogged | null;
    setUser: (user: UserLogged) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,

    setUser: 
    (user) => set({ user }), 

    logout: () => {
      sessionStorage.removeItem("demoUserProfile"); // Limpiar datos
      set({ user: null }); // eliminar usuario activo
    },


}));
