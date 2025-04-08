import { url_api, urlEndpoints } from "../globals";
import { Country } from "../types/Country.types";


export const getAllCountries = async ():Promise<Country[]> => {

    const response = await fetch(`${url_api}/${urlEndpoints.getAllCountries}`);
    if(!response.ok) throw new Error("Error al obtener los paises"); 
    return response.json();

}
