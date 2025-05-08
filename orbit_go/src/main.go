package main

import (
	"fmt"
	"log"
	logged_days "orbit_go/src/services/get_logged_days"
	"time"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	userList := []string{"188025"}
	startAt := "2025-04-05T00:00:00.000Z"
	endAt := time.Now().UTC().Format(time.RFC3339Nano)

	dataList, err := logged_days.GetLoggedDays(startAt, endAt, userList)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	fmt.Println(dataList)
}
