import { gql } from "@apollo/client";

export const GET_LOGGED_USER = gql`
  query GetLoggedUser {
    getLoggedUser {
      id
      name
      email
      password
    }
  }
`;
