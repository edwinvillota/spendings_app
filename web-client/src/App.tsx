import { GlobalStyle } from "@/common/styles/global-styles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./common/styles/default-theme";
import { Router } from "./router/Router";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
