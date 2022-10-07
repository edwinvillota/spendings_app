import { useMutation } from "@apollo/client";
import { LOGIN } from "./auth.mutations";
import { CredentialsInput, LoginData } from "./auth.types";

export const useLogin = () => {
  return useMutation<LoginData, CredentialsInput>(LOGIN);
};
