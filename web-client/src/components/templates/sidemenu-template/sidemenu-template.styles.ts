import styled, { css, keyframes } from "styled-components";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { SidemenuTemplateProps } from "./sidemenu-template.types";

const outAnimation = keyframes`
  from {
    scale: 1;
  }
  to {
    scale: 0;
  }
`;

const inAnimation = keyframes`
  0%{
    scale: 0;
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100%{
    opacity: 1;
    scale: 100%
  }
`;

export const MenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  padding: ${({ theme }) => theme.sizes.m};
  z-index: 2;
`;

export const CloseIcon = styled(AiOutlineClose)`
  height: ${({ theme }) => theme.sizes.xl};
  width: ${({ theme }) => theme.sizes.xl};
`;

export const Main = styled.main<Pick<SidemenuTemplateProps, "isMenuOpen">>`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  ${({ isMenuOpen }) =>
    isMenuOpen
      ? css`
          ${MenuButton} {
            animation: ${outAnimation} 0.3s ease-in-out;
          }
          ${CloseIcon} {
            animation: ${inAnimation} 0.6s ease-in-out;
          }
        `
      : css`
          ${MenuButton} {
            animation: ${inAnimation} 0.3s ease-in-out;
          }
          ${CloseIcon} {
            animation: ${outAnimation} 0.6s ease-in-out reverse;
          }
        `}
`;

export const Aside = styled.aside<Pick<SidemenuTemplateProps, "isMenuOpen">>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: absolute;
  left: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "-100%")};
  transition: left 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.light};
  gap: ${({ theme }) => theme.sizes.s};
  z-index: 2;
`;

export const AsideHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: ${({ theme }) => theme.sizes.m};
`;

export const AsideTitle = styled.h1`
  font-size: ${({ theme }) => theme.sizes.l};
`;

export const AsideContent = styled.div`
  display: flex;
  height: 100%;
`;

export const MenuIcon = styled(AiOutlineMenu)`
  height: ${({ theme }) => theme.sizes.xl};
  width: ${({ theme }) => theme.sizes.xl};
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray};
  width: 100%;
`;
