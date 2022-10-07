import { useQuery } from "@apollo/client";
import { GetCategoriesData } from "./category.types";
import { GET_CATEGORIES } from "./models/category.queries";

export const useGetCategories = () => {
  return useQuery<GetCategoriesData>(GET_CATEGORIES);
};
