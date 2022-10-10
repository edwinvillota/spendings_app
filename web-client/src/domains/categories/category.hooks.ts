import { useQuery } from "@apollo/client";
import { GetCategoriesData, GetCategoryByIdData } from "./category.types";
import { GET_CATEGORIES, GET_CATEGORY_BY_ID } from "./category.queries";

export const useGetCategories = () => {
  return useQuery<GetCategoriesData>(GET_CATEGORIES);
};

export const useGetCategoryById = (id: number) => {
  return useQuery<GetCategoryByIdData>(GET_CATEGORY_BY_ID, {
    variables: {
      id,
    },
  });
};
