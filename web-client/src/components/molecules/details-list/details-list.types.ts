export interface DetailsListItem<T> {
  label: string;
  getter: (item: T) => string | number;
}

export interface DetailsListProps<T> {
  data: T | undefined;
  items: DetailsListItem<T>[];
}

export interface DetailsListItemProps {
  label: string;
  value: string | number;
}
