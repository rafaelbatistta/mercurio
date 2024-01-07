import { Request, Response } from "express";
import { makeAuthenticateUserService } from "@/factories/makeAuthenticateUser";

export async function AuthenticateUseControllers(
  request: Request,
  response: Response
) {
  try {
    const {
      email,
      password,
    }: {
      email: string;
      password: string;
    } = request.body;

    const AuthenticateUserService = makeAuthenticateUserService();

    const AuthenticateUserReturn = await AuthenticateUserService.execute({
      email,
      password,
    });

    return response.json(AuthenticateUserReturn);
  } catch (err) {
    if (err instanceof Error) {
      return response.status(500).json({ error: err.message });
    }
    return response.status(500).json({ error: "Internal Server Error" });
  }
}
