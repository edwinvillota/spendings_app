import { useGetLoggedUser } from "@/domains/users/user.hooks";
import { useApolloClient } from "@apollo/client";
import { WithChildren } from "../../types/with-children";
import { AuthContext } from "./auth-context";
import { AuthContextState } from "./auth-context.types";

const { Provider } = AuthContext;

export const AuthProvider = ({ children }: WithChildren) => {
  const { data, error, loading } = useGetLoggedUser();
  const client = useApolloClient();

  const state: AuthContextState = {
    loading,
    error,
    user: data?.getLoggedUser,
    authenticated: data?.getLoggedUser ? true : false,
  };

  const logout = () => {
    localStorage.clear();
    client.resetStore();
    location.reload();
  };

  return <Provider value={{ ...state, logout }}>{children}</Provider>;
};
