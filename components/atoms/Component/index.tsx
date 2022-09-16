import styled, { BaseComponent } from "styled-components";


export const Component = styled.div<BaseComponent>`
	@media (max-width: ${props => props.theme.screens.small}) {
		display: ${props => props.hide?.includes("small") ? `none !important` : ''}
	}
	@media (min-width: ${props => props.theme.screens.small}) and (max-width: ${props => props.theme.screens.medium}) {
		display: ${props => props.hide?.includes("medium") ? 'none !important' : ''}
	}
	@media (min-width: ${props => props.theme.screens.medium}) and (max-width: ${props => props.theme.screens.large}) {
		display: ${props => props.hide?.includes("large") ? 'none !important' : ''}
	}
	@media (min-width: ${props => props.theme.screens.large}) {
		display: ${props => props.hide?.includes("xlarge") ? 'none !important' : ''}
	}
`;