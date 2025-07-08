import { default as NextLink } from "next/link";
import { Text } from "components";
import styled, { css, LinkProps } from "styled-components";

const Link = styled(Text).attrs({
  as: NextLink,
})<LinkProps>`
  text-decoration: none;
  color: var(--text-color);
  &:visited {
    color: var(--text-color);
  }
  ${(props) =>
    props.animated &&
    css`
      position: relative;
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 0.085em;
        background-color: white;
        transition: 0.5s ease;
      }
      &:hover:before {
        width: 100%;
      }
    `}
`;

export default Link;
