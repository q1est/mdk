// src/features/booking/model/booking.store.ts

import { useEffect, useState } from 'react';
import { tablesApi } from '@/shared/api/tables.api';
import {
  bookingApi,
  BookingRequest,
  BookingResponse
} from '@/shared/api/booking.api';

import { Table } from '@/shared/api/tables.api';

export const useBookingStore = () => {
  const [tables, setTables] = useState<Table[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // загрузка столов
  useEffect(() => {
  tablesApi
    .getTables()
    .then(res => setTables(res.data))
    .catch(() => setError('Не удалось загрузить столы'));
}, []);

  // создание бронирования
  const createBooking = async (data: BookingRequest) => {
    setLoading(true);
    setError(null);

    try {
      await bookingApi.createBooking(data);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Ошибка при бронировании');
    } finally {
      setLoading(false);
    }
  };

  return {
    tables,
    loading,
    success,
    error,
    createBooking,
  };
};
