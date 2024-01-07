import {
  GetProducts,
  GetProductsReturn,
} from "@/interfaces/services/getProducts";
import { ProductRepository } from "@/interfaces/repositories/ProductsRepository";

export class GetProductsService implements GetProducts {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(): Promise<GetProductsReturn> {
    const Product = await this.productRepository.findAll();
    return {
      products: Product,
    };
  }
}
