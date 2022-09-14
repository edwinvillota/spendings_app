import { Outlet } from "react-router-dom";
import { Main } from "./basic-template.styles";
import {
  BasicTemplateProps,
  BasicTemplateAlignEnum,
} from "./basic-template.types";

export const BasicTemplate = ({
  alignVertical = BasicTemplateAlignEnum.Top,
  alignHorizontal = BasicTemplateAlignEnum.Left,
}: BasicTemplateProps): JSX.Element => {
  return (
    <Main alignHorizontal={alignHorizontal} alignVertical={alignVertical}>
      <Outlet />
    </Main>
  );
};
