import { InMemoryUserRepository } from "@/repositories/inMemoryuserRepository";
import { AutheticateUserService } from "@/services/authenticateUser";

export function makeAuthenticateUserService() {
  const usersRepository = new InMemoryUserRepository();
  const authenticateUserService = new AutheticateUserService(usersRepository);
  return authenticateUserService;
}
