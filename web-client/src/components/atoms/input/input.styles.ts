import styled from "styled-components";

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.xs};
`;

export const Label = styled.span``;

export const StyledInput = styled.input`
  padding: ${({ theme }) => theme.sizes.s};
  border: ${({ theme }) => `solid ${theme.sizes.xxs} ${theme.colors.dark}`};
`;
