import { useGetLoggedUser } from "@/graphql/hooks/use-get-logged-user/use-get-logged-user";
import { WithChildren } from "../../types/with-children";
import { AuthContext } from "./auth-context";
import { AuthContextState } from "./auth-context.types";

const { Provider } = AuthContext;

export const AuthProvider = ({ children }: WithChildren) => {
  const { data, error, loading } = useGetLoggedUser();

  const state: AuthContextState = {
    loading,
    error,
    user: data?.getLoggedUser,
    authenticated: data?.getLoggedUser ? true : false,
  };

  return <Provider value={state}>{children}</Provider>;
};
