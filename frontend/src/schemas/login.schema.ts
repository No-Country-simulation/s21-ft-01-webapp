import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string({ invalid_type_error: "El formato introducido es incorrecto." })
        .email({ message: "Debes introducir un email válido." }),
        
    password: z
        .string({ message: "La contraseña es obligatoria", invalid_type_error: "El formato introducido es incorrecto." })
<<<<<<< HEAD
        .min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
=======
        .min(1, { message: "La contraseña no debe estar vacia." }),
>>>>>>> c7c7ad4543b3131af10eb48311ff2acdd1e66677
});

export type FormDataLogin = z.infer<typeof loginSchema>;