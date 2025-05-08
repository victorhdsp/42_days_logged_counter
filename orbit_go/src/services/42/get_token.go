package api_42

import (
	"bytes"
	"encoding/json"
	"errors"
	"net/http"
	"net/url"
	"os"
)

type TokenResponse struct {
	AccessToken      string `json:"access_token"`
	TokenType        string `json:"token_type"`
	ExpiresIn        int    `json:"expires_in"`
	Scope            string `json:"scope"`
	CreatedAt        int    `json:"created_at"`
	SecretValidUntil int    `json:"secret_valid_until"`
}

func GetToken() (string, error) {
	clientID := os.Getenv("CLIENT_ID_42")
	clientSecret := os.Getenv("CLIENT_SECRET_42")

	if clientID == "" || clientSecret == "" {
		return "", errors.New("Client ID or Client Secret is not defined")
	}

	form := url.Values{}
	form.Add("grant_type", "client_credentials")
	form.Add("client_id", clientID)
	form.Add("client_secret", clientSecret)

	req, err := http.NewRequest("POST", "https://api.intra.42.fr/oauth/token", bytes.NewBufferString(form.Encode()))
	if err != nil {
		return "", err
	}
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		return "", errors.New("Error fetching token: " + resp.Status)
	}

	var data TokenResponse
	if err := json.NewDecoder(resp.Body).Decode(&data); err != nil {
		return "", err
	}

	if data.AccessToken == "" {
		return "", errors.New("No access token found in response")
	}

	return data.AccessToken, nil
}
