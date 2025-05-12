import { get_logged_days } from "./services/get_logged_days";

const user_list = ["188025"]; 
const start_at = "2025-04-05T00:00:00.000Z";
const end_at = new Date().toISOString();

async function main() {
    const dataList = await get_logged_days(start_at, end_at, user_list)
    console.log(dataList);
}

main();