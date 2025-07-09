//import { url_api, urlEndpoints } from "../globals";
import { Country } from "../types/Country.types";

// export const getAllCountries = async ():Promise<Country[]> => {
//     const response = await fetch(`${url_api}/${urlEndpoints.getAllCountries}`);
//     if(!response.ok) throw new Error("Error al obtener los paises"); 
//     return response.json();
// }

// Mock temporal para desarrollo sin base de datos
export const getAllCountries = async (): Promise<Country[]> => {
    return [
        { country_id: 1, name: 'Argentina' },
        { country_id: 2, name: 'Brasil' },
        { country_id: 3, name: 'Chile' }
    ];
}
