package logged_days

import (
	api_42 "orbit_go/src/services/42"
	"time"
)

func getUserLoginData(userID, startAt, endAt, token string) ([]string, error) {
	userLoginData := []string{}
	var coins int64 = 0
	var streak int8 = 1

	locations, err := api_42.GetLocationByUserID(startAt, endAt, userID, token)
	if err != nil {
		return nil, err
	}

	var index = len(locations)
	for index >= 1 {
		index--
		var location = locations[index]

		splitedDate := ""
		if t := location.EndAt; len(t) >= 10 {
			splitedDate = t[:10]
		}
		dateString := splitedDate + "T00:00:00.000Z"

		var lastDate string
		if len(userLoginData) > 0 {
			lastDate = userLoginData[len(userLoginData)-1]
		}

		if dateString == "" || lastDate == dateString {
			continue
		}

		if lastDate != "" {
			lastDateParsed, err := time.Parse(time.RFC3339, lastDate)
			if err != nil {
				return nil, err
			}
			dateStringParsed, err := time.Parse(time.RFC3339, dateString)
			if err != nil {
				return nil, err
			}

			diff := dateStringParsed.Sub(lastDateParsed).Hours() / 24
			println("diff: ", diff, " lastDate: ", lastDate, " dateString: ", dateString)
			if diff == 1 {
				streak++
			} else {
				streak = 1
			}
		}

		if streak == 5 {
			coins += 5
		}

		coins += 1
		userLoginData = append(userLoginData, dateString)
	}
	return userLoginData, nil
}

func GetLoggedDays(startAt, endAt string, userList []string) (map[string][]string, error) {
	token, err := api_42.GetToken()
	if err != nil {
		return nil, err
	}

	dataList := make(map[string][]string)

	for _, userID := range userList {
		userLoginData, err := getUserLoginData(userID, startAt, endAt, token)
		if err != nil {
			return nil, err
		}
		dataList[userID] = userLoginData
	}

	return dataList, nil
}
