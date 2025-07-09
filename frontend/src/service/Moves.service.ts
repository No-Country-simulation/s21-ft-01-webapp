// --- MODO DEMO ---
import { TransferCash, TransferCashResponse } from "../types/CashMoves.types";
import { Transaction } from "../types/Transaction.types";

// Simula una transferencia exitosa
export const transfer = async (data: TransferCash): Promise<TransferCashResponse> => {
    return {
        date: new Date(),
        operation_id: 1,
        user_id: data.user_id,
        operation_type_id: data.operation_type_id,
        amount: data.amount,
        updatedAt: new Date(),
        createdAt: new Date()
    };
};

// Devuelve una lista de transacciones simuladas
export const fetchTransactions = async (): Promise<Transaction[]> => {
    return [
        {
            id: "1",
            description: "Depósito inicial",
            amount: 10000,
            date: "2025-06-01"
        },
        {
            id: "2",
            description: "Transferencia recibida",
            amount: 2500,
            date: "2025-06-10"
        },
        {
            id: "3",
            description: "Pago de servicio",
            amount: -1200,
            date: "2025-06-12"
        }
    ];
};
