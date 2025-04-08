import { useMutation, useQuery } from '@tanstack/react-query'
import { getAuthStatus } from '../service/Auth'
import { login, register } from '../service/authService'
import { LoginCredentials, RegisterUser } from '../types/User.types'
import { useAuthStore } from '../store/AuthStore'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  return useQuery({
    queryKey: ['auth'],
    queryFn: getAuthStatus,
  })
}

export const useRegister = () => {
  const mutation = useMutation({
    mutationFn: (data: RegisterUser) => register(data),
    onSuccess: (data) => {
      console.log("Finalizo la operación de registro");
      console.log("Datos de la operación: ", data);
    },
    onError: (error: Error) => {
      const errorMessage = error.message.split(": ").pop();
      console.error("Error en el registro:", errorMessage);
    }
  })

  return mutation
}

export const useLogin = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: (data: LoginCredentials) => login(data),
    onSuccess: (response) => {
      console.log("Finalizo la operación de inicio de sesión");
      console.log("Datos de la operación: ", response);

      if (response?.user) {
        setUser(response.user);

        navigate("/dashboard");
      }
    },
    onError: (error: Error) => {
      const errorMessage = error.message.split(": ").pop();
      console.error("Error en el inicio de sesión:", errorMessage);
    }
  });

  return mutation;
<<<<<<< HEAD
};




/*import { useQuery } from '@tanstack/react-query'
import { getAuthStatus } from '../service/Auth'

export const useAuth = () => {
  return useQuery({
    queryKey: ['auth'],
    queryFn: getAuthStatus,
  })
}*/

