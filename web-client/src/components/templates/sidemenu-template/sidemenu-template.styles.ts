import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const Main = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const AsideHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  padding: ${({ theme }) => theme.sizes.l};
`;

export const CloseIcon = styled(AiOutlineClose)`
  height: ${({ theme }) => theme.sizes.l};
  width: ${({ theme }) => theme.sizes.l};
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray};
  width: 100%;
`;
