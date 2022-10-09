import { List as StyledList, ListItem } from "./list.styles";
import type { ListProps } from "./list.types";

export const List = <T,>({ items, keyExtractor, renderItem }: ListProps<T>) => {
  return (
    <StyledList>
      {items?.map((item) => (
        <ListItem key={keyExtractor(item)}> {renderItem(item)} </ListItem>
      ))}
    </StyledList>
  );
};
