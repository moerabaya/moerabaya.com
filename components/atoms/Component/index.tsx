import styled, { ComponentProps, css } from "styled-components";
import { PT_Serif } from "@next/font/google";

const ptSerif = PT_Serif({
  weight: "400",
  style: ["italic", "normal"],
  subsets: ["latin"],
});

const Component = styled.div<ComponentProps>`
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  ${(props) => (props.font === "serif" ? ptSerif.style : null)}
  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    display: ${(props) =>
      props.hide?.includes("sm") ? `none !important` : ""};
  }
  @media (min-width: ${(props) =>
      props.theme.breakpoints.small}) and (max-width: ${(props) =>
      props.theme.breakpoints.medium}) {
    display: ${(props) =>
      props.hide?.includes("md") ? "none !important" : ""};
  }
  @media (min-width: ${(props) =>
      props.theme.breakpoints.medium}) and (max-width: ${(props) =>
      props.theme.breakpoints.large}) {
    display: ${(props) =>
      props.hide?.includes("lg") ? "none !important" : ""};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    display: ${(props) =>
      props.hide?.includes("xlg") ? "none !important" : ""};
  }
`;

export default Component;
