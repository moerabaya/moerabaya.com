import styled, { ColumnProps, css } from "styled-components";

const Colmun = styled.div<ColumnProps>`
	padding-left: ${props => props.theme.grid.margin};
	padding-right: ${props => props.theme.grid.margin};
	${props => props.sm && css`
		width: ${100 / (12/props.sm)}%
	`}
	@media (min-width: ${props => props.theme.screens.medium}){
		${props => props.md && css`
			width: ${100 / (12/props.md)}%
		`}
	}
	@media (min-width: ${props => props.theme.screens.large}){
		${props => props.lg && css`
			width: ${100 / (12/props.lg)}%
		`}
	}
	@media (min-width: ${props => props.theme.screens.xlarge}) {
		${props => props.xl && css`
			width: ${100 / (12/props.xl)}%
		`}
	}
`;
export default Colmun;