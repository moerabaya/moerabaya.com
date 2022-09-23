import styled, { ComponentProps, css } from "styled-components";


export const Component = styled.div<ComponentProps>`
	@media (max-width: ${props => props.theme.breakpoints.small}) {
		display: ${props => props.hide?.includes("sm") ? `none !important` : ''}
	}
	@media (min-width: ${props => props.theme.breakpoints.small}) and (max-width: ${props => props.theme.breakpoints.medium}) {
		display: ${props => props.hide?.includes("md") ? 'none !important' : ''}
	}
	@media (min-width: ${props => props.theme.breakpoints.medium}) and (max-width: ${props => props.theme.breakpoints.large}) {
		display: ${props => props.hide?.includes("lg") ? 'none !important' : ''}
	}
	@media (min-width: ${props => props.theme.breakpoints.large}) {
		display: ${props => props.hide?.includes("xlg") ? 'none !important' : ''}
	}

	${props => props.container && css`
		margin: 0 auto;
		max-width: unset;
		@media (min-width: ${props => props.theme.breakpoints.small}) and (max-width: ${props => props.theme.breakpoints.medium}) {
			max-width: ${props.theme.screens.small};
		}
		@media (min-width: ${props => props.theme.breakpoints.medium}) and (max-width: ${props => props.theme.breakpoints.large}) {
			max-width: ${props.theme.screens.medium};
		}
		@media (min-width: ${props => props.theme.breakpoints.large}) {
			max-width: ${props.theme.screens.large};
		}
		@media (min-width: ${props => props.theme.breakpoints.xLarge}) {
			max-width: ${props.theme.screens.xLarge};
		}
	`}
`;