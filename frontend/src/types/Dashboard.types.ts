

export interface Balance {
    balance: number
}

export interface Totals {
    total_income: string,
    total_expenses: string
}


export interface FinancialData {
    year_month: string;
    is_income: boolean;
    total_amount: string;
}

export interface ProcessedData {
    month: string;
    income: string;
    expense: string;
}

export interface DashboardResponse {
    monthly: FinancialData[],
    totals: Totals,
    balance: Balance
}