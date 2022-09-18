import { User } from "@/graphql/models/user";

export interface LoginData {
  login: {
    token: string;
  };
}

export interface LoginInput {
  input: Pick<User, "email" | "password">;
}
