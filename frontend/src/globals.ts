

export const url_api = import.meta.env.VITE_BACKEND_URL;

export const urlEndpoints = {
    getAllCountries: 'country',
    getCitiesByCountry: 'city/country',
    register: 'auth/register',
    login: 'auth/login',
    dashboardData: 'transaction/transactions', // Id de usuario al final
    transferCash: 'operation',
    getTransactions: 'transaction/user' // ID de usuario al final

}

