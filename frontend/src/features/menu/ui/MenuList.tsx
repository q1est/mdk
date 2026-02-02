import { MenuCategory } from '../model/types';
import { MenuItemCard } from './MenuItemCard';

export const MenuList = ({ category }: { category: MenuCategory }) => (
  <section>
    <h2>{category.category}</h2>
    <div>
      {category.items.map(item => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  </section>
);
