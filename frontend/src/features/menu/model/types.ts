export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  is_popular: boolean;
}

export interface MenuCategory {
  id: number;
  category: string;
  items: MenuItem[];
}

export interface MenuResponse {
  status: 'success';
  data: MenuCategory[];
}
