import { WithChildren } from "@/common/types/with-children";
import { Sidemenu } from "@/components/organisms/sidemenu/sidemenu";
import { Outlet } from "react-router-dom";
import { BasicTemplate } from "../basic-template/basic-template";
import {
  Main,
  Aside,
  Content,
  AsideHeader,
  CloseIcon,
  MenuIcon,
  MenuButton,
  AsideContent,
  AsideTitle,
} from "./sidemenu-template.styles";
import { SidemenuTemplateProps } from "./sidemenu-template.types";

export const SidemenuTemplate = ({
  children,
  isMenuOpen = true,
  onClose,
  onOpen,
}: WithChildren<SidemenuTemplateProps>) => {
  return (
    <BasicTemplate>
      <Main isMenuOpen={isMenuOpen}>
        <MenuButton onClick={onOpen}>
          <MenuIcon />
        </MenuButton>
        <Aside isMenuOpen={isMenuOpen}>
          <AsideHeader>
            <AsideTitle>Menu</AsideTitle>
            <CloseIcon onClick={onClose} />
          </AsideHeader>
          <AsideContent>
            <Sidemenu />
          </AsideContent>
        </Aside>
        <Content>{children || <Outlet />}</Content>
      </Main>
    </BasicTemplate>
  );
};
