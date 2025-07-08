import styled from "styled-components";

import Button from "./Button.styled";

export const Burger = styled(Button)`
  position: relative;
  display: inline-block;
  width: 2.5em;
  height: 2.5em;
  padding: 0.5em;
  vertical-align: middle;
  cursor: pointer;
  position: relative;
  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: calc(100% - 1em);
    height: 2px;
    background-color: var(--text-color);
    transition: 0.15s linear;
  }
  &:before {
    top: 37.5%;
  }
  &:after {
    top: 57.5%;
  }

  &:before {
    transform: ${(props) =>
      props.isActive
        ? "rotateZ(45deg) scale(0.9) translate(0.15em,0.15em)"
        : "unset"};
  }
  &:after {
    transform: ${(props) =>
      props.isActive
        ? "rotateZ(-45deg) scale(0.9) translate(0.25em,-0.225em)"
        : "unset"};
  }
`;
