import { useBookingStore } from '../model/booking.store';
import {
  validatePhone,
  validateRequired,
  validateDateTime
} from '../model/booking.validators';
import { TablesSelect } from './TablesSelect';
import { BookingSuccess } from './BookingSuccess';
import { BookingError } from './BookingError';

export const BookingForm = () => {
  const {
    tables,
    form,
    loading,
    success,
    error,
    updateField,
    submit
  } = useBookingStore();

  if (success) return <BookingSuccess data={success} />;

  const handleSubmit = () => {
    if (
      !validateRequired(form.name) ||
      !validatePhone(form.phone) ||
      !validateDateTime(form.booking_time) ||
      form.table_id === 0
    ) {
      alert('Заполните все поля корректно');
      return;
    }

    submit();
  };

  return (
    <>
      {error && <BookingError message={error} />}

      <input
        placeholder="Имя"
        value={form.name}
        onChange={e => updateField('name', e.target.value)}
      />

      <input
        placeholder="+79991234567"
        value={form.phone}
        onChange={e => updateField('phone', e.target.value)}
      />

      <input
        type="datetime-local"
        onChange={e =>
          updateField(
            'booking_time',
            new Date(e.target.value).toISOString()
          )
        }
      />

      <TablesSelect
        tables={tables}
        value={form.table_id}
        onChange={id => updateField('table_id', id)}
      />

      <textarea
        placeholder="Комментарий"
        onChange={e => updateField('comment', e.target.value)}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Отправка...' : 'Забронировать'}
      </button>
    </>
  );
};
