import { User } from "@/graphql/models/user";
import { ApolloError } from "@apollo/client";

export interface AuthContextState {
  authenticated: boolean;
  loading: boolean;
  error?: ApolloError;
  user?: User;
}

export enum AuthActionsEnum {
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILUER",
}

export type AuthContextActions =
  | { type: AuthActionsEnum.LOGIN_REQUEST }
  | { type: AuthActionsEnum.LOGIN_SUCCESS; payload: User }
  | { type: AuthActionsEnum.LOGIN_FAILURE };
