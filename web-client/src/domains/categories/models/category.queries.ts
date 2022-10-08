import { DocumentNode, gql } from "@apollo/client";
import { categoryDefaultFields } from "../category.fragments";

export const GET_CATEGORIES = gql`
  ${categoryDefaultFields}
  query GetCategories {
    getCategories {
      ...DefaultFields
    }
  }
` as DocumentNode;
