import { DocumentNode, gql } from "@apollo/client";
import { movementTypeAllFields } from "./movment-type.fragments";

export const GET_MOVEMENT_TYPES = gql`
  ${movementTypeAllFields}
  query GetMovementTypes {
    getMovementTypes {
      ...AllFields
    }
  }
` as DocumentNode;
