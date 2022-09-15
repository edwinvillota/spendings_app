import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($input: CredentialsInput!) {
    login(input: $input) {
      token
    }
  }
`;
