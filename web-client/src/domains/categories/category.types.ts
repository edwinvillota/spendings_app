import { Category } from "./models/category";

export interface GetCategoriesData {
  getCategories: Category[];
}

export interface GetCategoryByIdData {
  getCategoryById: Category;
}
