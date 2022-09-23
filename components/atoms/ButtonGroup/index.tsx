import styled from "styled-components";
import { Button } from "../Button";
import { Component } from "../Component";

const ButtonGroup = styled(Component)`
	> * {
		margin-inline-start: 1em;
		&:first-child {
			margin-inline-start: 0;
		}
	}
`;

export default ButtonGroup;