import { url_api, urlEndpoints } from "../globals"
import { City } from "../types/City.types"


export const getCitiesByCountry = async (country_id: number): Promise<City[]> => {

    const response = await fetch(`${url_api}/${urlEndpoints.getCitiesByCountry}/${country_id}`)
    if (!response.ok) throw new Error("Error al obtener las ciudades")
    return response.json()
}