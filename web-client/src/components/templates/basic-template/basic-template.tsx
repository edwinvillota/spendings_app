import { WithChildren } from "@/common/types/with-children";
import { Outlet } from "react-router-dom";
import { Main } from "./basic-template.styles";
import {
  BasicTemplateProps,
  BasicTemplateAlignEnum,
} from "./basic-template.types";

export const BasicTemplate = ({
  children,
  alignVertical = BasicTemplateAlignEnum.Top,
  alignHorizontal = BasicTemplateAlignEnum.Left,
}: WithChildren<BasicTemplateProps>): JSX.Element => {
  return (
    <Main alignHorizontal={alignHorizontal} alignVertical={alignVertical}>
      {children ? children : <Outlet />}
    </Main>
  );
};
