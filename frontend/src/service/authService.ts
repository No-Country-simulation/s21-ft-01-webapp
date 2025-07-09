// import { url_api, urlEndpoints } from '../globals'
import { LoginResponse } from '../types/User.types'
//LoginCredentials, RegisterUser
// --- MODO DEMO ---
// Para restaurar la conexión real, descomenta el bloque try/catch y comenta el bloque de mock.

export const register = async (): Promise<{ message: string }> => {
  // try {
  //   const response = await fetch(`${url_api}/${urlEndpoints.register}`, {
  //     method: "POST",
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(data) 
  //   });
  //   const responseJson = await response.json();
  //   if (!response.ok) {
  //     throw new Error(responseJson?.error || "Ha ocurrido un error al registrarse");
  //   }
  //   return responseJson;
  // } catch (error: unknown) {
  //   if (error instanceof Error) {
  //     throw new Error(error.message || "Error de red al registrarse");
  //   } else {
  //     throw new Error("Error desconocido al registrarse");
  //   }
  // }
  // --- MOCK DEMO ---
  return { message: 'Registro simulado exitoso (demo)' };
};

export const login = async (): Promise<LoginResponse> => {
  // try {
  //   const response = await fetch(`${url_api}/${urlEndpoints.login}`, {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   const responseJson = await response.json();
  //   if (!response.ok) {
  //     throw new Error(responseJson?.error || "Ha ocurrido un error al iniciar sesión");
  //   }
  //   return responseJson;
  // } catch (error: unknown) {
  //   if (error instanceof Error) {
  //     throw new Error(error.message || "Error de red al iniciar sesión");
  //   } else {
  //     throw new Error("Error desconocido al iniciar sesión");
  //   }
  // }
  // --- MOCK DEMO ---
  return {
    message: 'Login simulado exitoso (demo)',
    user: {
      id: 1,
      name: 'Demo',
      last_name: 'User',
      sender_account_id: 1,
      account_number: 12345678
    }
  };
};
