import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string({ invalid_type_error: "El formato introducido es incorrecto." })
        .email({ message: "Debes introducir un email válido." }),
        
    password: z
        .string({ message: "La contraseña es obligatoria", invalid_type_error: "El formato introducido es incorrecto." })
        .min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
});

export type FormDataLogin = z.infer<typeof loginSchema>;