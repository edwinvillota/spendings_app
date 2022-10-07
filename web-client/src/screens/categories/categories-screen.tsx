import { ScreenTemplate } from "@/components/templates/screen-template/screen-template";
import { useGetCategories } from "@/domains/categories/category.hooks";

export const CategoriesScreen = () => {
  const { data, loading } = useGetCategories();

  return (
    <ScreenTemplate loading={loading}>
      <ScreenTemplate.Header>
        <h1>Categories</h1>
      </ScreenTemplate.Header>

      <h1>Movement types</h1>
      <h1>Categories</h1>
      {data?.getCategories.map((category) => (
        <span>{category.name}</span>
      ))}
    </ScreenTemplate>
  );
};
