import { List } from "@/components/templates/list/list";
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
      <List
        items={data?.getCategories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ name }) => <span>{name}</span>}
      />
    </ScreenTemplate>
  );
};
