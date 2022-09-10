import styled, { keyframes } from "styled-components";
import { Button } from "./Button.styled";


export const Burger = styled(Button)`
	/* $bar-w: 40px;
	$bar-w-sm: 25px;
	$bar-h: 3px;
	$bar-h-sm: 2.5px;
	$bar-color: var(--text-color); */
	position: relative;
	display: inline-block;
	width: 1.75em;
	vertical-align: middle;
	min-height: 1.75em;
	cursor: crosshair;
	position: relative;
	@media (max-width: var(--screen-md-max)) {
		width: 1.75em;
	}
	&:before, &:after {
		// position: absolute;
		// left: 0;
		content: "";
		position: absolute;
		display: block;
		width: 1em;
		height: 2px;
		background-color: var(--text-color);
		transition: 0.15s linear;
		@media (max-width: var(--screen-md-max)) {
			width: 1.25em;
			height: 1.5px;
		}
	}
	&:before {
		top: 35%;
		@media (max-width: var(--screen-md-max)) {
			top: 35%;
		}
	}
	&:after {
		top: 55%;
		@media (max-width: var(--screen-md-max)) {
			top: 55%;
		}
	}

	&:before {
		transform: ${ props => props.isActive ? 'rotateZ(45deg) scale(0.9) translate(0.15em,0.15em)' : 'unset'};
	}
	&:after {
		transform: ${ props => props.isActive ? 'rotateZ(-45deg) scale(0.9) translate(0.15em,-0.1em)' : 'unset'};
	}
`;

