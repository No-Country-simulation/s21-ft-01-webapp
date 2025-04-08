import { url_api, urlEndpoints } from "../globals";
import { DashboardResponse } from "../types/Dashboard.types";

export const fetchDashboardData = async (idUser: number): Promise<DashboardResponse> => {
    const response = await fetch(`${url_api}/${urlEndpoints.dashboardData}/${idUser}`)
    // const response = await fetch(`${url_api}/${urlEndpoints.dashboardData}/11`)


    const responseJson = await response.json();

    if (!response.ok) {
        throw new Error(responseJson?.error || "Ha ocurrido un error al obtener la información");
    }

    return responseJson;
};