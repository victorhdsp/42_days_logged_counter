export interface TokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    created_at: number;
    secret_valid_until: number;
}   

export interface LocationResponseItem {
    end_at: string;
    id: number;
    begin_at: string;
    primary: boolean;
    host: string;
    campus_id: number;
    user: {
        id: number;
        email: string;
        login: string;
        first_name: string;
        last_name: string;
        usual_full_name: string;
        usual_first_name: string | null;
        url: string;
        phone: string | null;
        displayname: string;
        kind: string;
        image: {
            link: string;
            versions: {
                large: string;
                medium: string;
                small: string;
                micro: string;
            };
        };
        staff?: boolean;
        correction_point?: number | null;
        pool_month?: string | null;
        pool_year?: number | null;
        location?: any | null;
        wallet?: number | null;
        anonymize_date?: string | null;
        data_erasure_date?: string | null;
        created_at?: string | null;
        updated_at?: string | null;
        alumnized_at?: any | null;
        alumni?: boolean | null;
        active?: boolean | null;
    };
}

export type LocationResponse = LocationResponseItem[];