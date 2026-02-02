// src/shared/api/tables.api.ts

import { http } from './http';

export interface Table {
  id: number;
  number: string;
  capacity: number;
  position: string;
}

export const tablesApi = {
  getTables() {
    return http<{ data: Table[] }>('/tables');
  },
};
