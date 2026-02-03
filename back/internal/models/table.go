package models

//	"data": [
//
// {"id": 1, "number": "1", "capacity": 2, "position": "у окна"},
// {"id": 2, "number": "2", "capacity": 4, "position": "центр зала"}
type Table struct {
	Id       int    `json:"id"`
	Number   string `json:"number"`
	Capacity int `json:"capacity"`
	Position string `json:"position"`
}
