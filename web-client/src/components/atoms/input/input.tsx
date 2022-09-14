import { StyledInput, Wrapper, Label } from "./input.styles";
import { InputProps } from "./input.types";

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledInput {...props} />
    </Wrapper>
  );
};
