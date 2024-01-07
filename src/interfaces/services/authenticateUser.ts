export type AuthenticateUserProps = {
  email: string;
  password: string;
};

export type AuthenticateUserReturn = {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
};

export interface AuthenticateUser {
  execute: ({
    email,
    password,
  }: AuthenticateUserProps) => Promise<AuthenticateUserReturn>;
}
