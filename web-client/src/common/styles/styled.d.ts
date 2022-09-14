import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    sizes: {
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
    colors: {
      dark: string;
      light: string;
      gray: string;
    };
  }
}
