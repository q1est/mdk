// src/shared/api/booking.api.ts

import { http } from './http';

export interface BookingRequest {
  name: string;
  phone: string;
  table_id: number;
  booking_time: string;
  comment?: string;
}

export interface BookingResponse {
  status: string;
  message: string;
  booking_id: number;
}

export const bookingApi = {
  createBooking(data: BookingRequest) {
    return http<BookingResponse>('/bookings', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};
