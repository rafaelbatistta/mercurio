import { getProductsControllers } from "@/controllers/getProductsController";
import { Router } from "express";

export function productsRoutes() {
  const router = Router();
  router.get("/", getProductsControllers);
  return router;
}
