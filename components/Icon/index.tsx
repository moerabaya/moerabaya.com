import _ from "lodash";
import styled, { css, IconProps } from "styled-components";

const Icon = styled.span<IconProps>`
  display: inline-block;
  font-size: ${(props) =>
    !_.isString(props.size) ? `${props.size}px` : props.size};
  vertical-align: middle;
  ${(props) => {
    switch (props.slot) {
      case "end":
        return css`
          margin-inline-end: 0.5em;
        `;
        break;
      default:
        return css`
          margin-inline-start: 0.5em;
        `;
    }
  }}
`;

export default Icon;
