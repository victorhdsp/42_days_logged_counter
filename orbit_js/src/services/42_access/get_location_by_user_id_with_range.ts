import type { LocationResponse } from "./response_type";

async function get_location_by_user_id(start_at: string, end_at: string, user_id: string, token: string): Promise<LocationResponse> {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow"
    } satisfies RequestInit;

    const response = await fetch(`https://api.intra.42.fr/v2/users/${user_id}/locations?range[end_at]=${start_at},${end_at}`, requestOptions)

    if (!response.ok) {
        throw new Error(`Error fetching token: ${response.statusText}`);
    }

    const data = await response.json() as LocationResponse;

    return data;
}

export default get_location_by_user_id;