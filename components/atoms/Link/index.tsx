import styled, { css, LinkProps as Props } from "styled-components";
import { LinkProps } from "next/link";
import { mixins } from "../../../styles";
import Text from "../Text";

const Link = styled(Text).attrs({
  as: "a"
})<Props & LinkProps>`
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

export default Link;