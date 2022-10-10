import { DocumentNode, gql } from "@apollo/client";
import { categoryDefaultFields } from "./category.fragments";

export const GET_CATEGORIES = gql`
  ${categoryDefaultFields}
  query GetCategories {
    getCategories {
      ...DefaultFields
    }
  }
` as DocumentNode;

export const GET_CATEGORY_BY_ID = gql`
  ${categoryDefaultFields}
  query GetCategoryById($id: Float!) {
    getCategoryById(id: $id) {
      ...DefaultFields
    }
  }
` as DocumentNode;
