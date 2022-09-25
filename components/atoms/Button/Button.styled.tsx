import styled, { ButtonComponent, css } from "styled-components";
import { mixins } from "styles";
import { Component } from "../Component";

export const Button = styled((props) => <Component {...props} as="button" />)<ButtonComponent>`
	${props => props.smallCaps && mixins.smallCaps}
	appearance: none;
	border: none;
	outline: none;
	color: var(--text-color);
	text-decoration: none;
	border-radius: 0.25em;
	font-weight: 500;
	line-height: 1.1em;
	padding: ${props => {
		if(props.smallCaps)
			return props.size == "md" ? "0.5em" : props.size == "lg" ? "1.25em" : "0.3em";
		return props.size == "md" ? "0.5em" : props.size == "lg" ? "1.25em" : "0.3em";
	}};
	font-size: ${props => {
		if(props.smallCaps)
			return props.size == "md" ? "0.9rem" : props.size == "lg" ? "1em" : "0.85em";
		return props.size == "md" ? "0.95em" : props.size == "lg" ? "1em" : "0.85em";
	}};
	background-color: transparent;
	display: inline-block;
	&:hover {
		background-color: rgba(var(--text-color-rgb), 0.1);
	}
	&:active {
		background-color: rgba(var(--text-color-rgb), 0.1);
	}
	${props => props.alternative && css`
		background-color: var(--text-color);
		color: var(--background-color);
		&:hover {
			background-color: var(--primary-color);
		}
		&:active {
			background-color: var(--primary-color);
		}
	`}
	
`;
