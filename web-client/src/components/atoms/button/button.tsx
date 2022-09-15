import { ButtonProps, ButtonTypeEnum } from "./button.types";
import { StyledButton } from "./button.styles";
import { Loader } from "../loader/loader";

export const Button = ({
  children,
  preset = ButtonTypeEnum.Primary,
  loading = false,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton preset={preset} {...props}>
      {loading ? (
        <Loader size={15} squareGap={1} squareBorderRadius={"2px"} />
      ) : (
        children
      )}
    </StyledButton>
  );
};
