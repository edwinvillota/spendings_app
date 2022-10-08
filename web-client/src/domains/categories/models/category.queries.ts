import { gql } from "@apollo/client";
import { categoryDefaultFields } from "../category.fragments";

export const GET_CATEGORIES: any = gql`
  ${categoryDefaultFields}
  query GetCategories {
    getCategories {
      ...DefaultFields
    }
  }
`;
