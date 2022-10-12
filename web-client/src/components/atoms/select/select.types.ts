export interface SelectProps<T> {
  options: T[] | undefined;
  valueExtractor: (option: T) => number | string;
  labelExtractor: (option: T) => number | string;
}
