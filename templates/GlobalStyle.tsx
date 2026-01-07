"use client";

// GlobalStyle.js
import { createGlobalStyle, GlobalStyleProps } from "styled-components";

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body, html {
    direction: ${(props) => props.direction};
    &, * {
      font-family: ${(props) =>
        props.direction === "rtl"
          ? "var(--mr-bs-font-sans-serif-arabic)"
          : "var(--mr-bs-font-sans-serif)"};}
  }
`;

export default GlobalStyle;
