import { User } from "../users/models/user";

export interface LoginData {
  login: {
    token: string;
  };
}

export interface CredentialsInput {
  input: Pick<User, "email" | "password">;
}
