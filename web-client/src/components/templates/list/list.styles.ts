import styled from "styled-components";
import { ListTransientProps } from "./list.types";

export const List = styled.ul<ListTransientProps>`
  display: grid;
  width: 100%;
  row-gap: ${({ theme }) => theme.sizes.m};
  place-items: ${({ $loading }) => ($loading ? "center" : "inherit")};
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  width: 100%;
`;
