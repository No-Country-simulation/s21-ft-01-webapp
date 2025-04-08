import { url_api, urlEndpoints } from '../globals'
import { LoginCredentials, LoginResponse, RegisterUser} from '../types/User.types'

export const register = async (data: RegisterUser): Promise<RegisterUser> => {
  const response = await fetch(`${url_api}/${urlEndpoints.register}`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const responseJson = await response.json();

  if (!response.ok) {
    throw new Error(responseJson?.error || "Ha ocurrido un error al registrarse");
  }

  return responseJson;
};

export const login = async (data: LoginCredentials): Promise<LoginResponse> => {

  const response = await fetch(`${url_api}/${urlEndpoints.login}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const responseJson = await response.json();

  if (!response.ok) {
    throw new Error(responseJson?.error || "Ha ocurrido un error al iniciar sesión");
  }

  return responseJson;
}
