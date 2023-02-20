// import Link from "next/link";
import styled, { ButtonComponent, css } from "styled-components";
import { mixins } from "styles";
import { Component, Link } from "../";

const Button = styled((props: any) => (
  <Component {...props} as={props.href ? Link : "button"} />
))<ButtonComponent>`
  > a,
  & {
    ${(props) => props.smallCaps && mixins.smallCaps}
    appearance: none;
    border: none;
    outline: none;
    color: var(--text-color);
    text-decoration: none;
    border-radius: 0.25em;
    font-weight: 500;
    text-align: center;
    line-height: 1.1em;
    padding: ${(props) => {
      if (props.smallCaps)
        return props.size == "md"
          ? "0.75em 1em"
          : props.size == "lg"
          ? "1.25em"
          : "0.6em";
      return props.size == "md"
        ? "0.75em 1em"
        : props.size == "lg"
        ? "1.25em"
        : "0.6em";
    }};
    font-size: ${(props) => {
      if (props.smallCaps)
        return props.size == "md"
          ? "0.9rem"
          : props.size == "lg"
          ? "1em"
          : "0.85em";
      return props.size == "md"
        ? "0.95em"
        : props.size == "lg"
        ? "1em"
        : "0.85em";
    }};
    background-color: transparent;
    display: ${(props) => (props.layout === "full" ? "block" : "inline-block")};
    width: ${(props) => (props.layout === "full" ? "100%" : "auto")};
    &:hover {
      background-color: rgba(var(--text-color-rgb), 0.1);
    }
    &:active {
      background-color: rgba(var(--text-color-rgb), 0.1);
    }
    ${(props) =>
      props.alternative &&
      css`
        background-color: var(--text-color);
        color: var(--background-color);
        &:hover {
          background-color: var(--primary-color);
        }
        &:active {
          background-color: var(--primary-color);
        }
      `}
  }
`;
export default Button;
