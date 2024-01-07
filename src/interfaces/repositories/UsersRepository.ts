export type User = {
  id: number;
  email: string;
  password: string;
  name: string;
};

export interface UsersRepository {
  findOne: (email: string) => Promise<User | null>;
}
