import styled, { ButtonComponent } from "styled-components";
import { Base } from "../Base";

export const Button = styled((props) => <Base {...props} as="button" />)<ButtonComponent>`
	appearance: none;
	border: none;
	outline: none;
	color: var(--text-color);
	text-decoration: none;
	border-radius: 0.25em;
	padding: 0.3em 0.4em;
	line-height: 1;
	font-size: ${props => props.size == "medium" ? "1.25em" : props.size == "large" ? "1.5em" : "1em"};
	background-color: transparent;
	&:hover {
		background-color: rgba(var(--text-color-rgb), 0.1);
	}
	&:active {
		background-color: rgba(var(--text-color-rgb), 0.1);
	}
`;
