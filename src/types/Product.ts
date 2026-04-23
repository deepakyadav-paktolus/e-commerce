export interface Product {
  id: number;
  title: string;
  name: string;
  description: string;
  images: string[];
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  warrantyInformation: string;
  availabilityStatus: string;
}
