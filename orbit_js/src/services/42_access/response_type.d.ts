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

//{
//    "titles": [],
//    "titles_users": [],
//    "partnerships": [],
//    "patroned": [
//      {
//        "id": 4,
//        "user_id": 2,
//        "godfather_id": 15,
//        "ongoing": true,
//        "created_at": "2017-11-22T13:42:11.565Z",
//        "updated_at": "2017-11-22T13:42:11.572Z"
//      }
//    ],
//    "patroning": [],
//    "expertises_users": [
//      {
//        "id": 2,
//        "expertise_id": 3,
//        "interested": false,
//        "value": 2,
//        "contact_me": false,
//        "created_at": "2017-11-22T13:41:22.504Z",
//        "user_id": 2
//      }
//    ],
//    "roles": [],
//    "campus": [
//      {
//        "id": 1,
//        "name": "Cluj",
//        "time_zone": "Europe/Bucharest",
//        "language": {
//          "id": 3,
//          "name": "Romanian",
//          "identifier": "ro",
//          "created_at": "2017-11-22T13:40:59.468Z",
//          "updated_at": "2017-11-22T13:41:26.139Z"
//        },
//        "users_count": 28,
//        "vogsphere_id": 1
//      }
//    ],
//    "campus_users": [
//      {
//        "id": 2,
//        "user_id": 2,
//        "campus_id": 1,
//        "is_primary": true
//      }
//    ]
//  }
export interface UserResponse {
    id: number;
    login: string;
    url: string;
    first_name: string;
    last_name: string;
    usual_full_name: string;
    usual_first_name: string | null;
    email: string;
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
    groups?: any[];
    cursus_users?: {
        id: number;
        begin_at: string;
        end_at: string | null;
        grade: string | null;
        level: number;
        skills: any[];
        cursus_id: number;
        has_coalition: boolean;
        user: {
            id: number;
            login: string;
            url: string;
        };
        cursus: {
            id: number;
            created_at: string;
            name: string;
            slug: string;
        };
    }[];
    projects_users?: any[];
    languages_users?: {
        id: number;
        language_id: number;
        user_id: number;
        position: number;
        created_at: string;
    }[];
    achievements?: any[];
    titles?: any[];
    titles_users?: any[];
    partnerships?: any[];
    patroned?: {
        id: number;
        user_id: number;
        godfather_id: number;
        ongoing: boolean;
        created_at: string;
        updated_at: string;
    }[];
    patroning?: any[];
    expertises_users?: {
        id: number;
        expertise_id: number;
        interested: boolean;
        value: number;
        contact_me: boolean;
        created_at: string;
        user_id: number;
    }[];
    roles?: any[];

    campus?: {
        id: number;
        name: string;
        time_zone: string;
        language: {
            id: number;
            name: string;
            identifier: string;
            created_at: string;
            updated_at: string;
        };
        users_count: number;
        vogsphere_id: number;
    }[];
    campus_users?: {
        id: number;
        user_id: number;
        campus_id: number;
        is_primary: boolean;
    }[];
    location_users?: {
        id: number;
}