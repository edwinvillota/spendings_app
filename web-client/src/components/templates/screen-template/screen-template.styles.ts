import styled from "styled-components";

export const ScreenHeader = styled.div`
  display: flex;
  width: 100%;
  min-height: ${({ theme }) => theme.sizes.xl};
  align-items: center;
  font-size: ${({ theme }) => theme.sizes.l};
  font-weight: bold;
`;
