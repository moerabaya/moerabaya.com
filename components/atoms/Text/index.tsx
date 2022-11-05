import styled, { css, TextProps } from "styled-components";
import { mixins } from "styles";

const Text = styled.span<TextProps>`
  font-weight: ${(props) => props.weight ?? "normal"};
  opacity: ${(props) => props.opacity};
  ${(props) => props.smallCaps && mixins.smallCaps}
  ${(props) =>
    props.onHover &&
    css`
      &:hover {
        ${props.onHover}
      }
    `}
`;

export default Text;
