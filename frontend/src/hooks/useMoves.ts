import { useMutation } from "@tanstack/react-query";
import { TransferCash } from "../types/CashMoves.types";
import { fetchTransactions, transfer } from "../service/Moves.service";

export const useTransfer = () => {
  const mutation = useMutation({
    mutationFn: (data: TransferCash) => transfer(data),
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


import { useState, useEffect } from "react";

export const useTransactions = (userId: number, month: string) => {
  const [transactions, setTransactions] = useState<Record<string, any[]> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        setLoading(true);
        const data = await fetchTransactions(userId, month);
        setTransactions(data);
      } catch (err) {
        setError("No se pudieron cargar las transacciones.");
      } finally {
        setLoading(false);
      }
    };

    getTransactions();
  }, [userId, month]);

  return { transactions, loading, error };
};
