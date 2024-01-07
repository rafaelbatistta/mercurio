import {
  User,
  UsersRepository,
} from "@/interfaces/repositories/UsersRepository";

export class InMemoryUserRepository implements UsersRepository {
  public users: User[] = [
    {
      id: 1,
      name: "Jhone Doe",
      password: "12345",
      email: "mail@gmail.com",
    },
    {
      id: 2,
      name: "Jhone Doe 2",
      password: "123456",
      email: "mail2@gmail.com",
    },

    {
      id: 3,
      name: "Jhone Doe 3",
      password: "1234567",
      email: "mail3@gmail.com",
    },
  ];

  async findOne(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email);

    if (!user) {
      return null;
    }
    return user;
  }
}
