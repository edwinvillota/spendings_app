import { gql } from "@apollo/client";

export const LOGIN: any = gql`
  mutation Login($input: CredentialsInput!) {
    login(input: $input) {
      token
    }
  }
`;
