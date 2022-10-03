import { Category } from "@/graphql/models/category";
import {
  generateQueryWithCustomFields,
  GET_CATEGORIES,
} from "@/graphql/queries/get-categories.query";
import { gql, useQuery } from "@apollo/client";
import { GetCategoriesData } from "./use-get-categories.types";

export const useGetCategories = (fields?: Array<keyof Category>) => {
  if (fields?.length) {
    const result = useQuery<GetCategoriesData>(
      generateQueryWithCustomFields(fields)
    );

    return result;
  }

  const result = useQuery<GetCategoriesData>(GET_CATEGORIES);
  return result;
};
