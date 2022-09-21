import { WithChildren } from "@/common/types/with-children";
import { Outlet } from "react-router-dom";
import { BasicTemplate } from "../basic-template/basic-template";
import {
  Main,
  Aside,
  Content,
  AsideHeader,
  CloseIcon,
} from "./sidemenu-template.styles";

export const SidemenuTemplate = ({ children }: WithChildren) => {
  return (
    <BasicTemplate>
      <Main>
        <Aside>
          <AsideHeader>
            <CloseIcon />
          </AsideHeader>
        </Aside>
        <Content>{children || <Outlet />}</Content>
      </Main>
    </BasicTemplate>
  );
};
