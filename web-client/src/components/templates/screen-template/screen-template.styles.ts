import styled from "styled-components";

export const ScreenHeader = styled.div`
  display: flex;
  width: 100%;
  min-height: ${({ theme }) => theme.sizes.xl};
  align-items: center;
  font-size: ${({ theme }) => theme.sizes.l};
  font-weight: bold;
  gap: ${({ theme }) => theme.sizes.m};
`;

export const ScreenContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.m};
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.sizes.m};
  overflow: hidden;
`;
