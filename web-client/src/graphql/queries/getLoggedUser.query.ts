import { gql } from "@apollo/client";

export const GET_LOGGED_USER: any = gql`
  query GetLoggedUser {
    getLoggedUser {
      id
      name
      email
      password
    }
  }
`;
