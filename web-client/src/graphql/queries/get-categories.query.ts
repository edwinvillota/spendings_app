import { gql } from "@apollo/client";
import { Category } from "../models/category";

export const categoryDefaultFields = gql`
  fragment DefaultFields on Category {
    id
    name
    movementType {
      name
    }
  }
`;

export const GET_CATEGORIES: any = gql`
  ${categoryDefaultFields}
  query GetCategories {
    getCategories {
      ...DefaultFields
    }
  }
`;

export const generateQueryWithCustomFields = (
  fields: Array<keyof Category>
): any => {
  const fieldsToString = fields.join(",");
  const customFragment = gql`
    fragment CustomFields on Category {
      ${fieldsToString}
    }
  `;

  return gql`
    ${customFragment}
    query GetCategories {
      getCategories {
        ...CustomFields
      }
    }
  `;
};
