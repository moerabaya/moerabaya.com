import styled, { BaseComponent, css } from "styled-components";


export const Component = styled.div<BaseComponent>`
	@media (max-width: ${props => props.theme.screens.small}) {
		display: ${props => props.hide?.includes("sm") ? `none !important` : ''}
	}
	@media (min-width: ${props => props.theme.screens.small}) and (max-width: ${props => props.theme.screens.medium}) {
		display: ${props => props.hide?.includes("md") ? 'none !important' : ''}
	}
	@media (min-width: ${props => props.theme.screens.medium}) and (max-width: ${props => props.theme.screens.large}) {
		display: ${props => props.hide?.includes("lg") ? 'none !important' : ''}
	}
	@media (min-width: ${props => props.theme.screens.large}) {
		display: ${props => props.hide?.includes("xlg") ? 'none !important' : ''}
	}

	${props => props.container && css`
		margin: 0 auto;
		max-width: auto;
		@media (min-width: ${props => props.theme.screens.small}) and (max-width: ${props => props.theme.screens.medium}) {
			max-width: ${props.theme.screens.small};
		}
		@media (min-width: ${props => props.theme.screens.medium}) and (max-width: ${props => props.theme.screens.large}) {
			max-width: ${props.theme.screens.medium};
		}
		@media (min-width: ${props => props.theme.screens.large}) {
			max-width: ${props.theme.screens.large};
		}
	`}
`;