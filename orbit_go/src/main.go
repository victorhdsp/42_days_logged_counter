package main

import (
	"fmt"
	"log"
	bonus_project "orbit_go/src/services/get_bonus_projects"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	userList := []string{"188025"}
	//startAt := "2024-04-05T00:00:00.000Z"
	//endAt := time.Now().UTC().Format(time.RFC3339Nano)

	//dataList, err := logged_days.GetLoggedDays(startAt, endAt, userList)
	dataList, err := bonus_project.GetBonusProject(userList)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	fmt.Println(dataList)
}
