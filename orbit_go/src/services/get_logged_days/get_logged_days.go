package logged_days

import (
	api_42 "orbit_go/src/services/42"
)

type ListDataByUser map[string]map[string]string

func GetLoggedDays(startAt, endAt string, userList []string) (ListDataByUser, error) {
	token, err := api_42.GetToken()
	if err != nil {
		return nil, err
	}

	dataList := make(ListDataByUser)

	for _, userID := range userList {
		userLoginData, err := api_42.GetLocationByUserID(startAt, endAt, userID, token)
		if err != nil {
			return nil, err
		}
		dataList[userID] = userLoginData
	}

	return dataList, nil
}
