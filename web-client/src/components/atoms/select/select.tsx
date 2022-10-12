import { forwardRef, Ref } from "react";
import Styled from "./select.styles";
import { SelectProps } from "./select.types";

export const Select = <T,>({
  options,
  valueExtractor,
  labelExtractor,
}: SelectProps<T> & { ref?: Ref<HTMLSelectElement> }) => {
  if (!options) return null;

  return (
    <Styled.Select>
      {options.map((option) => (
        <Styled.Option value={valueExtractor(option)}>
          {labelExtractor(option)}
        </Styled.Option>
      ))}
    </Styled.Select>
  );
};
