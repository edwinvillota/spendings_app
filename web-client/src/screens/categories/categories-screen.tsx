import { ScreenTemplate } from "@/components/templates/screen-template/screen-template";
import { CategoryList } from "./components/category-list/category-list";

export const CategoriesScreen = () => {
  return (
    <ScreenTemplate>
      <ScreenTemplate.Header>
        <h1>Categories</h1>
      </ScreenTemplate.Header>
      <CategoryList />
    </ScreenTemplate>
  );
};
