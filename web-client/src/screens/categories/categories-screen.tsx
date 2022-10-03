import { ScreenTemplate } from "@/components/templates/screen-template/screen-template";
import { useGetCategories } from "@/graphql/hooks/use-get-categories/use-get-categories";

export const CategoriesScreen = () => {
  const { data, loading } = useGetCategories([
    "id",
    "userId",
    "name",
    "user { name }",
  ]);

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
