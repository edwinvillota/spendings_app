import styled from "styled-components";
import { InputProps } from "./input.types";

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.xs};
`;

export const Label = styled.span``;

export const ErrorMessage = styled.span`
  color: red;
`;

export const StyledInput = styled.input<InputProps>`
  padding: ${({ theme }) => theme.sizes.s};
  border: ${({ theme }) => `solid ${theme.sizes.xxs} ${theme.colors.dark}`};
`;
