import { GET_LOGGED_USER } from "@/graphql/queries/getLoggedUser.query";
import { useQuery } from "@apollo/client";
import { GetLoggedUserData } from "./use-get-logged-user.types";

export const useGetLoggedUser = () => {
  const result = useQuery<GetLoggedUserData>(GET_LOGGED_USER);
  return result;
};
