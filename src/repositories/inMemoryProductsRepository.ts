import {
  Product,
  ProductRepository,
} from "@/interfaces/repositories/ProductsRepository";

export class InMemoryProductsRepository implements ProductRepository {
  public products: Product[] = [
    {
      id: 1,
      description: "Product 1 description",
      price: 10,
      name: "Product 1",
    },

    {
      id: 2,
      description: "Product 2 description",
      price: 10.5,
      name: "Product 2",
    },

    {
      id: 3,
      description: "Product 3 description",
      price: 19,
      name: "Product 3",
    },
  ];

  async findAll(): Promise<Product[]> {
    return this.products;
  }
}
