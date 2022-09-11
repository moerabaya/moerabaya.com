import styled, { BaseComponent } from "styled-components";

enum ScreenSize {
	Small = "500px",
	Medium = "768px",
	Large = "1280px",
	xLarge = "1440px"
}

export const Base = styled.div<BaseComponent>`
	@media (max-width: ${ScreenSize.Small}) {
		display: ${props => props.hide?.includes("small") ? `none !important` : ''}
	}
	@media (min-width: ${ScreenSize.Small}) and (max-width: ${ScreenSize.Medium}) {
		display: ${props => props.hide?.includes("medium") ? 'none !important' : ''}
	}
	@media (min-width: ${ScreenSize.Medium}) and (max-width: ${ScreenSize.Large}) {
		display: ${props => props.hide?.includes("large") ? 'none !important' : ''}
	}
	@media (min-width: ${ScreenSize.Large}) {
		display: ${props => props.hide?.includes("xlarge") ? 'none !important' : ''}
	}
`;