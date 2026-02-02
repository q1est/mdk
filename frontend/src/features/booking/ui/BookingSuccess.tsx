import { BookingResponse } from '../model/types';

export const BookingSuccess = ({ data }: { data: BookingResponse }) => (
  <div>
    <h2>Бронь создана</h2>
    <p>{data.message}</p>
    <strong>Номер заявки: #{data.booking_id}</strong>
  </div>
);
