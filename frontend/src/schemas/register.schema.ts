// Esquema de validación deshabilitado para modo demo.

import { z } from 'zod'; 

//Definición del esquema de validación para el formulario de registro usando Zod
export const registerSchema = z.object({
    name: z.string().min(1, { message: "El nombre es obligatorio" }),
    last_name: z.string().min(1, { message: "El apellido es obligatorio" }),
    email: z.string().min(1, { message: "El email es obligatorio" }).refine((val) => val.includes("@"), { message: "Debe ser un email valido" }),
    birth_date: z.preprocess(
        (val) => (typeof val === "string" || val instanceof Date) ? new Date(val) : val,
        z.date({ required_error: "La fecha de nacimiento es obligatoria" })
            .max(new Date(), { message: "La fecha debe ser anterior a hoy" })
    ),
    phone: z.string()
        .min(1, { message: "El teléfono es obligatorio" })
        .regex(/^\d+$/, { message: "El teléfono debe ser numérico" }),
    country_id: z.string().min(1, { message: "El país es obligatorio" }),
    province_id: z.string().min(1, { message: "*seleccione una provincia" }),
    city_id: z.string().min(1, { message: "*seleccione una ciudad" }),
    address: z.string().min(1, { message: "La dirección es obligatoria" }),
    doc_type: z.string().min(1, { message: "*seleccione el tipo de documento" }),
    dni: z.string()
        .min(1, { message: "El número de documento es obligatorio" })
        .regex(/^\d+$/, { message: "El número de documento debe ser numérico" }),
    password: z.string().optional(),
    repeatPwd: z.string().optional(),
});

export type FormDataRegister = z.infer<typeof registerSchema>;