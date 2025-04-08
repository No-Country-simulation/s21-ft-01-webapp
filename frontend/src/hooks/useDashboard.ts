import { useQuery } from "@tanstack/react-query"
import { fetchDashboardData } from "../service/Dashboard.service"
import { DashboardResponse } from "../types/Dashboard.types"

export const useDashboard = (idUser: number | undefined) => {
    return useQuery<DashboardResponse, Error>({
        queryFn: () => fetchDashboardData(idUser!),
        queryKey: ['dashboard', idUser],
        enabled: !!idUser
    })
}