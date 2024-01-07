export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export interface ProductRepository {
  findAll: () => Promise<Product[]>;
}
