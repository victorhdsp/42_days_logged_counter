import dayjs from "dayjs";
import get_location_by_user_id from "../42_access/get_location_by_user_id_with_range";
import { get_token } from "../42_access/token";

type UserLoginDataList = Record<string, string[]>;

async function get_user_login_data(user_id: string, start_at: string, end_at: string, token: string) {
    const userLoginData: string[] = []

    const locations = await get_location_by_user_id(start_at, end_at, user_id, token);
    
    for (const location of locations) {
        const splitedDate = location.end_at.split("T")[0];
        const dateString = `${splitedDate}T00:00:00.000Z`;
        let lastDate = null;

        if (userLoginData.length > 0) {
            lastDate = userLoginData[userLoginData.length - 1];
        }

        if (!dateString || lastDate === dateString)
            continue;
        
        userLoginData.push(dateString);
    }
    return userLoginData;
}

export async function get_logged_days(start_at: string, end_at: string, user_list: string[]) {
    const token = await get_token();

    const dataList: UserLoginDataList = {};

    for (const user_id of user_list) {
        const userLoginData = await get_user_login_data(user_id, start_at, end_at, token);
        dataList[user_id] = userLoginData;
    }

    return dataList;
}