export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
};

export type CreateProductDto = {
  name: string;
  price: number;
  description: string;
  category: string;
};

export type UpdateProductDto = {
  name?: string;
  price?: number;
  description?: string;
  category?: string;
};