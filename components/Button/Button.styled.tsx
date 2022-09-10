import styled, { ButtonInterface } from "styled-components";
import { Base } from "../Base";

export const Button = styled(Base)<ButtonInterface>`
	appearance: none;
	border: none;
	outline: none;
	text-decoration: none;
	border-radius: 0.25em;
	padding: 0.3em 0.4em;
	line-height: 1;
	font-size: ${props => props.size == "medium" ? "1.25em" : props.size == "large" ? "1.5em" : "1em"};
	background-color: transparent;
	&:hover {
		background-color: var(--border-color);
	}
	&:active {
		background-color: var(--border-color);
	}
`;
