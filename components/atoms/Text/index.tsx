import _ from "lodash";
import styled, { css, TextProps } from "styled-components";
import { mixins } from "styles";
import Component from "../Component";
import { PT_Serif } from "@next/font/google";

const ptSerif = PT_Serif({
  weight: "400",
  style: ["italic", "normal"],
  subsets: ["latin"],
});

const Text = styled((props) => (
  <Component {...props} as={props.as ?? "span"} />
))<TextProps>`
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  ${(props) => props.smallCaps && mixins.smallCaps}
  font-family: ${(props) =>
    props.font ? ptSerif.style.fontFamily : "inherit"};
  font-weight: ${(props) => props.weight};
  opacity: ${(props) => props.opacity};
  text-align: ${(props) => props.align};
  text-transform: ${(props) => props.textTransform};
  ${(props) =>
    props.size &&
    css`
      font-size: ${_.isNumber(props.size) ? `${props.size}px` : props.size};
    `}
  ${(props) =>
    props.onHover &&
    css`
      &:hover {
        ${props.onHover}
      }
    `}
`;

export default Text;
