import { ReactNode } from "react";

export interface ListProps<T> {
    items?: T[];
    renderItem: (item: T) => ReactNode;
    keyExtractor: (item: T) => string;
}