import _ from "lodash";
import styled, { css, TextProps } from "styled-components";
import { mixins } from "styles";

import Component from "@/components/Component";

const Text = styled(Component).attrs((props) => ({
  ...props,
  as: props.as || "span",
}))<TextProps>`
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  ${(props) => props.smallCaps && mixins.smallCaps}
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
