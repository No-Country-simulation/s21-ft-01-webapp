export interface User {
    id: number;
    name: string;
    last_name: string;
    email: string;
    birth_date: Date;
    phone: string;
    country_id: number;
    city_id: number;
    dni: string,
    dni_photo?: File | null;
    password: string;
    repeatPwd?: string
}

export interface LoginResponse {
    message: string;
    user: UserLogged;
}

export interface UserLogged{
    id: number;
    name: string;
    last_name: string;
    sender_account_id: number;
    account_number: number;
}

export type RegisterUser = Omit<User, 'id'>;

export type LoginCredentials = Pick<User, 'email' | 'password'>;
