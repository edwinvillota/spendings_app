import { WithChildren } from "@/common/types/with-children";
import { Loader } from "@/components/atoms/loader/loader";
import { useTheme } from "styled-components";
import { BasicTemplate } from "../basic-template/basic-template";
import { BasicTemplateAlignEnum } from "../basic-template/basic-template.types";
import { ScreenHeader as StyledHeader } from "./screen-template.styles";
import { ScreenTemplateProps } from "./screen-template.types";

const Header = ({ children }: WithChildren) => (
  <StyledHeader>{children}</StyledHeader>
);

export const ScreenTemplate = ({
  children,
  loading,
}: WithChildren<ScreenTemplateProps>) => {
  const { colors } = useTheme();
  return (
    <BasicTemplate
      alignHorizontal={
        loading ? BasicTemplateAlignEnum.Center : BasicTemplateAlignEnum.Left
      }
      alignVertical={
        loading ? BasicTemplateAlignEnum.Center : BasicTemplateAlignEnum.Top
      }
    >
      {loading ? (
        <Loader
          backgroundColor={colors.dark}
          stepDuration={0.4}
          squareBorderRadius="8px"
        />
      ) : (
        children
      )}
    </BasicTemplate>
  );
};

ScreenTemplate.Header = Header;
