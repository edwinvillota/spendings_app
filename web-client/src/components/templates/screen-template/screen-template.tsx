import { WithChildren } from "@/common/types/with-children";
import { BasicTemplate } from "../basic-template/basic-template";
import { ScreenHeader as StyledHeader } from "./screen-template.styles";

const Header = ({ children }: WithChildren) => (
  <StyledHeader>{children}</StyledHeader>
);

export const ScreenTemplate = ({ children }: WithChildren) => {
  return <BasicTemplate>{children}</BasicTemplate>;
};

ScreenTemplate.Header = Header;
