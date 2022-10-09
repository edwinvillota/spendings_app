import { forwardRef } from "react";
import { StyledInput, Wrapper, Label, ErrorMessage } from "./input.styles";
import { InputProps } from "./input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }: InputProps, ref) => {
    return (
      <Wrapper>
        <Label>{label}</Label>
        <StyledInput {...props} ref={ref} />
        {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
      </Wrapper>
    );
  }
);

Input.displayName = "Input";

export { Input };
