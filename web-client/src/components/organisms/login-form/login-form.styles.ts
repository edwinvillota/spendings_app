import styled from "styled-components";

export const Title = styled.h1`
  font-weight: bold;
  font-size: ${({ theme }) => theme.sizes.xl};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.m};
  padding: ${({ theme }) => theme.sizes.xl};
`;
