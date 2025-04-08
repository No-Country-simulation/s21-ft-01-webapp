import { z } from 'zod';


export const moveOut = z.object({
    ammount: z
        .string({ invalid_type_error: "El formato introducido es incorrecto." })
        .min(1, { message: 'El monto total debe ser mayor a 0' }),
    reciever_account_number: z
        .string({ invalid_type_error: "El formato introducido es incorrecto." })
        .min(1, { message: "Debes completar este campo" })
})


export type MoveOutForm = z.infer<typeof moveOut>