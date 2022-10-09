import { List } from "@/components/templates/list/list";
import {
  DetailsListItemContainer,
  DetailsListItemLabel,
  DetailsListItemValue,
} from "./details-list.styles";
import { DetailsListProps, DetailsListItemProps } from "./details-list.types";

const DetailsListItem = ({ label, value }: DetailsListItemProps) => {
  return (
    <DetailsListItemContainer>
      <DetailsListItemLabel>{label}</DetailsListItemLabel>
      <DetailsListItemValue>{value}</DetailsListItemValue>
    </DetailsListItemContainer>
  );
};

export const DetailsList = <T,>({ data, items }: DetailsListProps<T>) => {
  if (!data) return null;

  const dataSource = items.map(({ label, getter }) => ({
    label,
    value: getter(data),
  }));

  return (
    <List
      items={dataSource}
      keyExtractor={({ label }) => label}
      renderItem={(item) => <DetailsListItem {...item} />}
    />
  );
};
