package main

import (
	"backend/internal/handlers"
	"context"
	"log"

	"net/http"

	"github.com/jackc/pgx/v5/pgxpool"
)

func main() {
	ctx := context.Background()

	// Подключения к разным базам
	menuPool, err := pgxpool.New(ctx, "postgres://postgres:root@localhost:5432/menu_db")
	if err != nil {
		log.Fatalf("Unable to connect to menu database: %v\n", err)
	}
	
	log.Println("Successfully connected to menu_db")
	defer menuPool.Close()

	bookingPool, _ := pgxpool.New(ctx, "postgres://user:root@localhost:5432/booking_db")

	h := &handlers.ApiHandler{
		MenuDB:    menuPool,
		BookingDB: bookingPool,
	}

	mux := http.NewServeMux()


	mux.HandleFunc("GET /api/v1/menu", h.GetMenu)
	mux.HandleFunc("POST /api/v1/bookings", h.CreateBooking)

	http.ListenAndServe(":8080", mux)
}
