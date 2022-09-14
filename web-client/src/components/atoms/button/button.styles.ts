import styled, { css } from "styled-components";
import { ButtonProps, ButtonTypeEnum } from "./button.types";

const cssByType = css<ButtonProps>`
  ${({ theme, preset }) =>
    (preset === ButtonTypeEnum.Primary &&
      css`
        background-color: ${theme.colors.dark};
        color: ${theme.colors.light};
      `) ||
    (preset === ButtonTypeEnum.Secondary &&
      css`
        background-color: ${theme.colors.gray};
        color: ${theme.colors.dark};
      `) ||
    (preset === ButtonTypeEnum.Link &&
      css`
        background-color: transparent;
        color: ${theme.colors.dark};
      `)}
`;

export const StyledButton = styled.button<ButtonProps>`
  padding: ${({ theme }) => theme.sizes.s};
  border: none;
  font-weight: bold;
  ${cssByType}
`;
