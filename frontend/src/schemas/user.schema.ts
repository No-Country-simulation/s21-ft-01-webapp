import { z } from "zod";  

export const userSchema = z.object({  
    name: z
        .string().min(1, "El nombre es obligatorio."),  
    last_name: z
        .string().min(1, "El apellido es obligatorio."),  
    email: z
        .string().email("Correo electrónico inválido."),  
    birth_date: z
        .string().optional().refine((value) => value === undefined || /^\d{4}-\d{2}-\d{2}$/.test(value), {  
        message: "La fecha debe estar en formato YYYY-MM-DD.",  
    }), // Formato de fecha ISO
    phone: z
        .string().optional().refine((value) => value === undefined || /^\+?\d{1,3}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(value), {  
        message: "Número de teléfono inválido.",  
    }),  
});  

export type UserProfile = z.infer<typeof userSchema>;  