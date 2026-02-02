// src/features/menu/model/menu.store.ts

import { useEffect, useState } from 'react';
import { MenuCategory } from './types';
import { menuApi } from '@/shared/api/menu.api';

export const useMenuStore = () => {
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    menuApi
      .getMenu()
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => {
        setError(err.message || 'Не удалось загрузить меню');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    categories,
    loading,
    error,
  };
};
