import styled from "styled-components";

export const DetailsListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.s};
`;
export const DetailsListItemLabel = styled.h2`
  font-weight: bold;
`;
export const DetailsListItemValue = styled.span`
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
`;
