import { UserProfile } from '../schemas/user.schema';

// --- MODO DEMO ---
// Devuelve un perfil de usuario simulado
export const getUserProfile = async (): Promise<UserProfile> => {

  const userStr = localStorage.getItem("demoUser");
  if (userStr) {
    const user = JSON.parse(userStr);
    return {
      name: user.name,
      last_name: user.last_name,
      email: user.email,
      birth_date: user.birth_date,
      phone: user.phone
    };
  }
  // ...mock por defecto...
  return {
    name: "Demo",
    last_name: "User",
    email: "demo@capybank.com",
    birth_date: "1990-01-01",
    phone: "+54 11 1234-5678"
  };
};

// Simula la actualización del perfil (no hace nada)
export const updateUserProfile = async (data: UserProfile): Promise<void> => {
  // Actualiza el usuario en localStorage si existe
  const userStr = localStorage.getItem("demoUser");
  if (userStr) {
    const user = JSON.parse(userStr);
    const updated = { ...user, ...data };
    localStorage.setItem("demoUser", JSON.stringify(updated));
  }
  return;
};