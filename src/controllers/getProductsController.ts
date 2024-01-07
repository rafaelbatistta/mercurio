import { Request, Response } from "express";
import { makeGetProductsService } from "@/factories/makeGetProducts";

export async function getProductsControllers(
  request: Request,
  response: Response
) {
  const getProductsService = makeGetProductsService();

  const getProductsReturn = await getProductsService.execute();

  return response.json({
    products: getProductsReturn.products,
  });
}
