import { WithChildren } from "@/common/types/with-children";
import { Loader } from "@/components/atoms/loader/loader";
import { useTheme } from "styled-components";
import { BasicTemplate } from "../basic-template/basic-template";
import { BasicTemplateAlignEnum } from "../basic-template/basic-template.types";
import {
  ScreenContent,
  ScreenHeader as StyledHeader,
} from "./screen-template.styles";
import {
  ScreenTemplateHeaderProps,
  ScreenTemplateProps,
} from "./screen-template.types";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = ({
  children,
  goBack,
}: WithChildren<ScreenTemplateHeaderProps>) => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      {goBack && <AiOutlineArrowLeft onClick={() => navigate(-1)} />}
      {children}
    </StyledHeader>
  );
};

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
        <ScreenContent>{children}</ScreenContent>
      )}
    </BasicTemplate>
  );
};

ScreenTemplate.Header = Header;
