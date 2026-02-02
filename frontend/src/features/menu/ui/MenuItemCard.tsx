import { MenuItem } from '../model/types';

export const MenuItemCard = ({ item }: { item: MenuItem }) => (
  <div>
    <img src={item.image_url} alt={item.name} loading="lazy" />
    <h3>
      {item.name}
      {item.is_popular && <span> ★</span>}
    </h3>
    <p>{item.description}</p>
    <strong>{item.price} ₽</strong>
  </div>
);
