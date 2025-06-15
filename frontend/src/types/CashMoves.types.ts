export interface TransferCash { 
    amount: number;
    operation_type_id: number;
    user_id: number;
    is_income: boolean;
    sender_account_id: number;
    receiver_account_id: string;
} 

export interface TransferCashResponse {
    date: Date;
    operation_id: number;
    user_id: number;
    operation_type_id: number;
    amount: number;
    updatedAt: Date;
    createdAt: Date;
}