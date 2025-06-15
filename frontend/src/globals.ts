export const url_api = import.meta.env.VITE_BACKEND_URL;

export const urlEndpoints = {
    getAllCountries: 'country',
    getCitiesByCountry: 'city/country',
    getTransactions: 'transaction',
    register: 'auth/register',
    login: 'auth/login',
    transferCash: 'cashMoves/transferCash'
}