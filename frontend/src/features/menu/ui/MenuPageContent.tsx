import { useMemo, useState } from 'react';
import { useMenuStore } from '../model/menu.store';
import { MenuCategories } from './MenuCategories';
import { MenuList } from './MenuList';
import { MenuSkeleton } from './MenuSkeleton';

export const MenuPageContent = () => {
  const { categories, loading, error } = useMenuStore();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categoryNames = useMemo(
    () => categories.map(c => c.category),
    [categories]
  );

  const visibleCategories = activeCategory
    ? categories.filter(c => c.category === activeCategory)
    : categories;

  if (loading) return <MenuSkeleton />;
  if (error) return <div>{error}</div>;

  return (
    <>
      <MenuCategories
        categories={categoryNames}
        onSelect={setActiveCategory}
      />
      {visibleCategories.map(c => (
        <MenuList key={c.id} category={c} />
      ))}
    </>
  );
};
