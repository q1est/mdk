import { Table } from '../model/types';

interface Props {
  tables: Table[];
  value: number;
  onChange: (id: number) => void;
}

export const TablesSelect = ({ tables, value, onChange }: Props) => (
  <select value={value} onChange={e => onChange(Number(e.target.value))}>
    <option value={0}>Выберите стол</option>
    {tables.map(t => (
      <option key={t.id} value={t.id}>
        Стол {t.number} • {t.capacity} мест • {t.position}
      </option>
    ))}
  </select>
);
