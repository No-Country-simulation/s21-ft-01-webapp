import { url_api, urlEndpoints } from "../globals";
import { TransferCash, TransferCashResponse } from "../types/CashMoves.types";


export const transfer = async (data: TransferCash): Promise<TransferCashResponse> => {
    const response = await fetch(`${url_api}/${urlEndpoints.transferCash}`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const responseJson = await response.json();

    if (!response.ok) {
        throw new Error(responseJson?.error || "Ha ocurrido un error al registrarse");
    }

    return responseJson;
}

export const fetchTransactions = async (userId: number, month: Date) => {
    try {

        const monthDatted = new Date(month)
        const formattedMonth = `${monthDatted.getFullYear()}-${(monthDatted.getMonth() + 1).toString().padStart(2, '0')}`;

        console.log(formattedMonth);

        const response = await fetch(`${url_api}/${urlEndpoints.getTransactions}/${userId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ month: formattedMonth }),
        });

        if (!response.ok) {
            throw new Error("Error al obtener transacciones");
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};
