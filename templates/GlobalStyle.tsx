// GlobalStyle.js
import { createGlobalStyle, GlobalStyleProps } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body, html {
    direction: ${(props) => props.direction};
    font-family: ${(props) =>
      props.direction === "rtl"
        ? "var(--bs-font-sans-serif-arabic)"
        : "var(--bs-font-sans-serif)"};
  }
`;

export default GlobalStyle;
