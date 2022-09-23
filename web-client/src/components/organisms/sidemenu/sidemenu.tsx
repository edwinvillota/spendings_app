import useAuthContext from "@/common/auth/hooks/use-auth-context";
import { ButtonTypeEnum } from "@atoms/button/button.types";
import {
  Nav,
  NavLink,
  NavLinkContainer,
  ButtonContainer,
  LogoutIcon,
  LogoutButton,
} from "./sidemenu.styles";

export const Sidemenu = () => {
  const { logout } = useAuthContext();

  return (
    <Nav>
      <NavLinkContainer>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/categories">Categories</NavLink>
      </NavLinkContainer>
      <ButtonContainer>
        <LogoutButton preset={ButtonTypeEnum.Link} onClick={() => logout()}>
          <LogoutIcon />
          Logout
        </LogoutButton>
      </ButtonContainer>
    </Nav>
  );
};
