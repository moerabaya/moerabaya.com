import styled from "styled-components";


export const Button = styled.button`
	appearance: none;
	border: none;
	outline: none;
	border-radius: 0.25em;
	line-height: 1em;
	padding: 0.2em 0.3em;
	background-color: transparent;
	&:hover {
		background-color: var(--border-color);
	}
`;
