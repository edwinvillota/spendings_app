import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { Button } from "@/components/atoms/button/button";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: stretch;
`;

export const NavLinkContainer = styled.div``;

export const NavLink = styled(BaseNavLink)`
  display: flex;
  padding: ${({ theme }) => theme.sizes.m};
  text-decoration: none;

  &.active {
    background-color: ${({ theme }) => theme.colors.gray};
    font-weight: bold;
  }

  &:active,
  &:visited {
    color: black;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`;

export const LogoutButton = styled(Button)`
  padding: ${({ theme }) => theme.sizes.m};
`;

export const LogoutIcon = styled(AiOutlineLogout)`
  margin-right: ${({ theme }) => theme.sizes.s};
  width: ${({ theme }) => theme.sizes.l};
  height: ${({ theme }) => theme.sizes.l};
`;
