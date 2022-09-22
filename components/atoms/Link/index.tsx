import styled, { css, LinkProps } from "styled-components";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";
import { mixins } from "../../../styles";
import Text from "../Text";

const StyledLink = styled(Text).attrs({
  as: "a"
})<LinkProps & NextLinkProps>`
	text-decoration: none;
	${props => props.smallCaps && mixins.smallCaps}
	${props => props.animated && css`
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

const Link = ({href, ...rest}: LinkProps & NextLinkProps) => (
	<NextLink prefetch href={href} passHref>
		<StyledLink {...rest} />
	</NextLink>);

export default Link;