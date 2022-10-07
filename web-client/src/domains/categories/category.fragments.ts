import { gql } from "@apollo/client";

export const categoryDefaultFields = gql`
  fragment DefaultFields on Category {
    id
    name
    movementType {
      name
    }
  }
`;
