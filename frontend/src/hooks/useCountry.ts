import { useQuery } from "@tanstack/react-query"
import { Country } from "../types/Country.types"
import { getAllCountries } from "../service/Country.service"


export const useCountries = () =>{

    return useQuery<Country[], Error>({
        queryKey: ['countries'],
        queryFn: getAllCountries,
    })
}