package api_42

type ImageUserResponse struct {
	Link     string `json:"link"`
	Versions struct {
		Large  string `json:"large"`
		Medium string `json:"medium"`
		Small  string `json:"small"`
		Micro  string `json:"micro"`
	} `json:"versions"`
}

type UserResponse struct {
	ID              int               `json:"id"`
	Email           string            `json:"email"`
	Login           string            `json:"login"`
	FirstName       string            `json:"first_name"`
	LastName        string            `json:"last_name"`
	UsualFullName   string            `json:"usual_full_name"`
	UsualFirstName  string            `json:"usual_first_name"`
	URL             string            `json:"url"`
	Phone           string            `json:"phone"`
	DisplayName     string            `json:"displayname"`
	Kind            string            `json:"kind"`
	Image           ImageUserResponse `json:"image"`
	Staff           bool              `json:"staff"`
	CorrectionPoint int               `json:"correction_point"`
	PoolMonth       string            `json:"pool_month"`
	PoolYear        string            `json:"pool_year"`
	Location        string            `json:"location"`
	Wallet          int               `json:"wallet"`
	AnonymizeDate   string            `json:"anonymize_date"`
	DataErasureDate string            `json:"data_erasure_date"`
	CreatedAt       string            `json:"created_at"`
	UpdatedAt       string            `json:"updated_at"`
	AlumnizedAt     string            `json:"alumnized_at"`
	Alumni          bool              `json:"alumni"`
	Active          bool              `json:"active"`
}

type LocationResponse []struct {
	EndAt    string       `json:"end_at"`
	ID       int          `json:"id"`
	BeginAt  string       `json:"begin_at"`
	Primary  bool         `json:"primary"`
	Host     string       `json:"host"`
	CampusID int          `json:"campus_id"`
	User     UserResponse `json:"user"`
}
