import { List } from "@/components/templates/list/list";
import { useGetCategories } from "@/domains/categories/category.hooks";
import { CategoryListItem } from "./category-list.styles";

export const CategoryList = () => {
  const { data, loading } = useGetCategories();

  return (
    <List
      items={data?.getCategories}
      keyExtractor={({ id }) => String(id)}
      renderItem={({ id, name }) => (
        <CategoryListItem to={`/category/${id}`}>{name}</CategoryListItem>
      )}
      emptyComponent={<h1>It seems there is nothing to show!</h1>}
      loading={loading}
    />
  );
};
