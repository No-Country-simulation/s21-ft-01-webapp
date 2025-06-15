import { url_api, urlEndpoints } from '../globals'
import { LoginCredentials, LoginResponse, RegisterUser } from '../types/User.types'

// Función para registrar un nuevo usuario
// Envía los datos de registro a la API y retorna la respuesta
export const register = async (data: RegisterUser): Promise<{ message: string }> => {
  try {
    const response = await fetch(`${url_api}/${urlEndpoints.register}`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data) 
    });

  const responseJson = await response.json();

    // Si la respuesta no es exitosa, lanza un error con el mensaje recibido o uno por defecto
    if (!response.ok) {
      throw new Error(responseJson?.error || "Ha ocurrido un error al registrarse");
    }

    // Retorna el mensaje de éxito de la API
    return responseJson;
  } catch (error: unknown) {
    // Captura errores de red o de la API y los relanza
    if (error instanceof Error) {
      throw new Error(error.message || "Error de red al registrarse");
    } else {
      throw new Error("Error desconocido al registrarse");
    }
  }
};

// Función para iniciar sesión
// Envía las credenciales a la API y retorna la respuesta tipada como LoginResponse
export const login = async (data: LoginCredentials): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${url_api}/${urlEndpoints.login}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const responseJson = await response.json();

    // Si la respuesta no es exitosa, lanza un error con el mensaje recibido o uno por defecto
    if (!response.ok) {
      throw new Error(responseJson?.error || "Ha ocurrido un error al iniciar sesión");
    }

    // Retorna el objeto LoginResponse con el usuario logueado y el mensaje
    return responseJson;
  } catch (error: unknown) {
    // Captura errores de red o de la API y los relanza
    if (error instanceof Error) {
      throw new Error(error.message || "Error de red al iniciar sesión");
    } else {
      throw new Error("Error desconocido al iniciar sesión");
    }
  }
}
