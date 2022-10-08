import { useQuery } from "@apollo/client";
import { GET_LOGGED_USER } from "./user.queries";
import { GetLoggedUserData } from "./user.types";

export const useGetLoggedUser = () =>
  useQuery<GetLoggedUserData>(GET_LOGGED_USER);
