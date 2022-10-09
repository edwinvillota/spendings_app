import { ReactNode } from "react";

export interface ListProps<T> {
  items: T[] | undefined;
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string;
  loading?: boolean;
  emptyComponent?: ReactNode;
}

export interface ListTransientProps {
  $loading?: boolean;
}
