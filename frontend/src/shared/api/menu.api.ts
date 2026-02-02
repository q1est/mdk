// src/shared/api/menu.api.ts

import { http } from './http';
import { MenuResponse } from '@/features/menu/model/types';

export const menuApi = {
  getMenu() {
    return http<MenuResponse>('/menu');
  },
};
