import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    color: ${theme.colors.primayBg};
    background-color: ${theme.colors.primayBg};
  }

.App {}
  
`;
