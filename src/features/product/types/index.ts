export type ProductRequest = {
  id?: number;
  name?: string;
};

export type ProductResponse = {
  id?: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
  discount: string;
  quantity?: number;
  productId?: string;
};
