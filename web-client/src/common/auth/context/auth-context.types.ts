import { User } from "@/graphql/models/user";
import { ApolloError } from "@apollo/client";

export interface AuthContextState {
  authenticated: boolean;
  loading: boolean;
  error?: ApolloError;
  user?: User;
}

export interface AuthContextMethods {
  logout(): void;
}

export interface AuthContextReturnType
  extends AuthContextState,
    AuthContextMethods {}
