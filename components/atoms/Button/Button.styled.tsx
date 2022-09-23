import styled, { ButtonComponent, css } from "styled-components";
import { mixins } from "styles";
import { Component } from "../Component";

export const Button = styled((props) => <Component {...props} as="button" />)<ButtonComponent>`
	appearance: none;
	border: none;
	outline: none;
	color: var(--text-color);
	text-decoration: none;
	border-radius: 0.25em;
	padding: 0.3em 0.4em;
	font-weight: 500;
	line-height: 1.1em;
	font-size: ${props => props.size == "md" ? "1.25em" : props.size == "lg" ? "1.5em" : "1em"};
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
	${props => props.smallCaps && mixins.smallCaps}
	${props => {
		if(props.size) {
			switch(props.size){
				case "md":
					return css`
						padding: 0.6em 0.75em;
						font-size: 1.15em;
					`;
					break;
				case "lg":
					return css`
						padding: ${props.smallCaps ? "1.5em" : "1.2em 1.2em"};
						font-size: ${props.smallCaps ? "1em" : "1.5em"};
						height: ${1+3}em;
					`;
					break;
				default:
					return css`
						padding: 0.3em 0.4em;
						font-size: ${props.smallCaps ? "var(--base-small-caps-size)" : "1em"};
					`;
					break;
			}
		}
	}}
`;
