import { UsersRepository } from "@/interfaces/repositories/UsersRepository";
import {
  AuthenticateUser,
  AuthenticateUserProps,
  AuthenticateUserReturn,
} from "@/interfaces/services/authenticateUser";

export class AutheticateUserService implements AuthenticateUser {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUserProps): Promise<AuthenticateUserReturn> {
    const user = await this.usersRepository.findOne(email);

    if (user == null) {
      throw new Error("User not found.");
    }

    if (user.password !== password) {
      throw new Error("Password does not match.");
    }

    return {
      token: "TOKEN_123",
      user: {
        email: user.email,
        id: user.id,
        name: user.name,
      },
    };
  }
}
