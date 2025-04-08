

export interface TransferCash {
    ammount: number;
    operation_type_id: number;
    user_id: number;
    is_income: boolean;
    sender_account_id: number;
    reciever_account_number: string
}

export interface TransferCashResponse {
    date: Date;
    operation_id: number;
    user_id: number;
    operation_type_id: number;
    ammount: number;
    updatedAt: Date;
    createdAt: Date;
}