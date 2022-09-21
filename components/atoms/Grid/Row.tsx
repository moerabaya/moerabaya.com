import styled, { RowProps } from "styled-components";

const Row = styled.div<RowProps>`
	padding-top: ${props => props.theme.grid.padding};
	padding-bottom: ${props => props.theme.grid.padding};
	display: flex;
	flex-direction: row;
	flex-wrap: ${props => props.wrap ? "wrap" : "no-wrap"};
`;

export default Row;