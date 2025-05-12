package logged_days

import (
	api_42 "orbit_go/src/services/42"
)

type ListBonusByUser map[string]map[string]int

func traitementAPIData(userID string, token string) map[string]int {
	userBonusList := make(map[string]int)
	userData, err := api_42.GetUserByID(userID, token)

	if err != nil {
		return nil
	}

	for _, project := range userData.ProjectsUsers {
		if project.FinalMark > 100 {
			userBonusList[project.Project.Name] = project.FinalMark
		}
	}
	return userBonusList
}

func GetBonusProject(userList []string) (ListBonusByUser, error) {
	token, err := api_42.GetToken()
	if err != nil {
		return nil, err
	}

	dataList := make(ListBonusByUser)

	for _, userID := range userList {
		userBonusList := traitementAPIData(userID, token)
		dataList[userID] = userBonusList
	}

	return dataList, nil
}
