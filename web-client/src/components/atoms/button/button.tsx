import { ButtonProps, ButtonTypeEnum } from "./button.types";
import { StyledButton } from "./button.styles";

export const Button = ({
  children,
  preset = ButtonTypeEnum.Primary,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton preset={preset} {...props}>
      {children}
    </StyledButton>
  );
};
