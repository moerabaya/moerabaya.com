import styled, { css, TextProps } from "styled-components";
import { mixins } from "../../../styles";

const Text = styled.span<TextProps>`
	opacity: ${props => props.opacity};
	${props => props.smallCaps && mixins.smallCaps}

	${props => props.onHover && css`
		&:hover {
			${props.onHover}
		}
	`}
`;

export default Text;