import { AuthenticateUseControllers } from "@/controllers/authenticateUser";
import { Router } from "express";

export function authenticateRoutes() {
  const router = Router();
  router.post("/", AuthenticateUseControllers);
  return router;
}
