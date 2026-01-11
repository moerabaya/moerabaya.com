"use client";

import styled, { AnimateProps } from "styled-components";

import Wiggle from "./Wave";

const isNumber = (value: unknown): value is number =>
  typeof value === "number" && !isNaN(value);

const Animate = styled.span<AnimateProps>`
  display: inline-block;
  animation-name: ${(props) => (props.name == "wave" ? Wiggle : "none")};
  animation-duration: ${(props) =>
    isNumber(props.duration) ? `${props.duration}ms` : props.duration};
  animation-delay: ${(props) =>
    isNumber(props.duration) ? `${props.duration}ms` : props.duration};
  animation-iteration-count: ${(props) => props.iteration};
  animation-timing-function: linear;
  transform-origin: ${(props) => props.origin};
`;

Animate.defaultProps = {
  duration: 1000,
  delay: 0,
  iteration: "infinite",
  origin: "center",
};

export default Animate;
