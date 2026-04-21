export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  image?: string;
}

export interface CartItemType extends Product {
  quantity: number;
}