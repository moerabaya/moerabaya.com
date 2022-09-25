import styled, { css, GridProps } from "styled-components";
import { Container } from "../Container";
import Row from "./Row";
import Column from "./Column";

const Grid = styled(Container)<GridProps>`
	@media (min-width: ${props => props.theme.breakpoints.small}) and (max-width: ${props => props.theme.breakpoints.medium}) {
		max-width: ${props => props.fluid?.includes("sm") ? "100%" : props.theme.screens.small};
	}
	@media (min-width: ${props => props.theme.breakpoints.medium}) and (max-width: ${props => props.theme.breakpoints.large}) {
		max-width: ${props => props.fluid?.includes("md") ? "100%" : props.theme.screens.medium};
	}
	@media (min-width: ${props => props.theme.breakpoints.large}) {
		max-width: ${props => props.fluid?.includes("lg") ? "100%" : props.theme.screens.large};
	}
	@media (min-width: ${props => props.theme.breakpoints.xLarge}) {
		max-width: ${props => props.fluid?.includes("xlg") ? "100%" : props.theme.screens.xLarge};
	}
`;

export {Grid, Row, Column};