"use client";

import styled, { css, TextProps } from "styled-components";
import { mixins } from "styles";

import Component from "@/components/Component";

const isNumber = (value: unknown): value is number =>
  typeof value === "number" && !isNaN(value);

const Text = styled("span")<TextProps>`
  padding: ${(props) => props.$p};
  margin: ${(props) => props.$m};
  ${(props) => props.$smallCaps && mixins.smallCaps}
  font-weight: ${(props) => props.$weight};
  opacity: ${(props) => props.$opacity};
  text-align: ${(props) => props.$align};
  text-transform: ${(props) => props.$textTransform};
  ${(props) =>
    props.$size &&
    css`
      font-size: ${isNumber(props.$size) ? `${props.$size}px` : props.$size};
    `}
  ${(props) =>
    props.$onHover &&
    css`
      &:hover {
        ${props.$onHover}
      }
    `}
`;

export default Text;
