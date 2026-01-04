import styled from "styled-components";

import Button from "./Button.styled";

const StyledButton = styled(Button)
  .withConfig({
    shouldForwardProp: (prop) => prop !== "variant",
  })
  .attrs({
    variant: "secondary",
    className:
      "h-[40px] max-w-[40px] max-sm:px-[7.5px] text-center cursor-pointer relative",
  })``;

export const Burger = styled(StyledButton)<{
  $isActive?: boolean;
}>`
  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: calc(100% - 1em);
    height: 2px;
    background-color: var(--mr-text-color);
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
      props.$isActive
        ? "rotateZ(45deg) scale(0.9) translate(0.15em,0.15em)"
        : "unset"};
  }
  &:after {
    transform: ${(props) =>
      props.$isActive
        ? "rotateZ(-45deg) scale(0.9) translate(0.25em,-0.225em)"
        : "unset"};
  }
`;
