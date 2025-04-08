import { useQuery } from "@tanstack/react-query";
import { City } from "../types/City.types";
import { getCitiesByCountry } from "../service/City.service";


export const useCities = (country_id: number | null) => {
    return useQuery<City[], Error>({
        queryFn: () => getCitiesByCountry(country_id!),
        queryKey: ['cities', country_id],
        enabled: !!country_id
    })
}