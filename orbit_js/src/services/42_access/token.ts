import type { TokenResponse } from "./response_type";

export async function get_token() {
    const client_id = process.env.CLIENT_ID_42;
    const client_secret = process.env.CLIENT_SECRET_42;

    if (!client_id || !client_secret) {
        throw new Error("Client ID or Client Secret is not defined");
    }

    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("client_id", client_id);
    urlencoded.append("client_secret", client_secret);

    const requestOptions = {
        method: "POST",
        headers: headers,
        body: urlencoded,
        redirect: "follow"
    } satisfies RequestInit;

    const response = await fetch("https://api.intra.42.fr/oauth/token", requestOptions);

    if (!response.ok) {
        throw new Error(`Error fetching token: ${response.statusText}`);
    }

    const data = await response.json() as TokenResponse;

    if (!data.access_token) {
        throw new Error("No access token found in response");
    }

    return data.access_token;
}
