import { gql } from "@apollo/client";

export const movementTypeAllFields = gql`
  fragment AllFields on MovementType {
    id
    name
    direction
    createdAt
    updatedAt
  }
`;
