import styled, { css, LinkProps } from "styled-components";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";
import { mixins } from "styles";
import { Text } from "components/atoms";

const StyledLink: any = styled(Text).attrs({
  as: "a",
})<LinkProps>`
  text-decoration: none;
  ${(props) => props.smallCaps && mixins.smallCaps}
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

const Link = ({ href, locale, ...rest }: LinkProps) => (
  <NextLink prefetch href={href} locale={locale} passHref>
    <StyledLink {...rest} target />
  </NextLink>
);

export default Link;
