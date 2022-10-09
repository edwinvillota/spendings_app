import { Loader } from "@/components/atoms/loader/loader";
import { List as StyledList, ListItem } from "./list.styles";
import type { ListProps } from "./list.types";

export const List = <T,>({
  items,
  keyExtractor,
  renderItem,
  emptyComponent,
  loading,
}: ListProps<T>) => {
  const isEmpty = !items || !items.length;

  const getElementToRender = () => {
    if (loading) return <Loader />;
    if (isEmpty) return emptyComponent;
    return items.map((item) => (
      <ListItem key={keyExtractor(item)}> {renderItem(item)} </ListItem>
    ));
  };

  return <StyledList $loading={loading}>{getElementToRender()}</StyledList>;
};
