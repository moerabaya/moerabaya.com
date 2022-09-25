import styled, { keyframes } from "styled-components";
import { Button } from "./Button.styled";


export const Burger = styled(Button)`
	position: relative;
	display: inline-block;
	width: 1.75em;
	vertical-align: middle;
	min-height: 1.75em;
	cursor: pointer;
	position: relative;
	&:before, &:after {
		content: "";
		position: absolute;
		display: block;
		width: 1.2em;
		height: 2px;
		background-color: var(--text-color);
		transition: 0.15s linear;
	}
	&:before {
		top: 35%;
	}
	&:after {
		top: 60%;
	}

	&:before {
		transform: ${ props => props.isActive ? 'rotateZ(45deg) scale(0.9) translate(0.15em,0.15em)' : 'unset'};
	}
	&:after {
		transform: ${ props => props.isActive ? 'rotateZ(-45deg) scale(0.9) translate(0.15em,-0.1em)' : 'unset'};
	}
`;

