import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryListItem = styled(Link)`
  display: flex;
  flex-basis: 100%;
  padding: ${({ theme }) => theme.sizes.m} 0;
  border-bottom: solid 1px black;
`;
