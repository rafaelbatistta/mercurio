type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export type GetProductsReturn = {
  products: Product[];
};

export interface GetProducts {
  execute: () => Promise<GetProductsReturn>;
}
