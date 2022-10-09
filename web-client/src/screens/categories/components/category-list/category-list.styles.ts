import styled from "styled-components";

export const CategoryListItem = styled.button`
  display: flex;
  flex-basis: 100%;
  padding: ${({ theme }) => theme.sizes.m} 0;
  border-bottom: solid 1px black;
`;
