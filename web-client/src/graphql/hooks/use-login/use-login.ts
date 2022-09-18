import { LOGIN } from "@/graphql/mutations/login.mutation";
import { useMutation } from "@apollo/client";
import { LoginData, LoginInput } from "./use-login.types";

export const useLogin = () => {
  const result = useMutation<LoginData, LoginInput>(LOGIN);

  return result;
};
