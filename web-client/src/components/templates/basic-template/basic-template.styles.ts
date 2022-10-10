import styled from "styled-components";
import {
  BasicTemplateAlignEnum,
  BasicTemplateProps,
} from "./basic-template.types";

export const Main = styled.main<BasicTemplateProps>`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray};
  gap: ${({ theme }) => theme.sizes.m};
  justify-content: ${({ alignVertical }) =>
    alignVertical === BasicTemplateAlignEnum.Center ? "center" : "flex-start"};
  align-items: ${({ alignHorizontal }) =>
    alignHorizontal === BasicTemplateAlignEnum.Center
      ? "center"
      : "flex-start"};
`;
