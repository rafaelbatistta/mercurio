import { getProductsControllers } from "@/controllers/getProductsController";
import { InMemoryProductsRepository } from "@/repositories/inMemoryProductsRepository";
import { GetProductsService } from "@/services/getProducts";

export function makeGetProductsService() {
  const ProductsRepository = new InMemoryProductsRepository();
  const getProductsservice = new GetProductsService(ProductsRepository);
  return getProductsservice;
}
