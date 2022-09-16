import styled, { ScreenSize, MenuItemComponent } from "styled-components";
import { mixins } from "styles";
import { Component } from "../../atoms/Component";

interface Props {
  readonly isOpen: boolean;
}

const Title = styled.span`
	font-size: 1.1em;
	vertical-align: middle;
	margin: 0 0.5em;
	${mixins.smallCaps}
	&:only-child {
		margin: 0;
	}
`;

const Nav = Object.assign(
	styled.nav<Props>`
		backdrop-filter: blur(20px);
		position: fixed;
		width: 100%;
		z-index: 100;
		height: 75px;
		overflow: hidden;
		transition: 0.25s ease;
		background-color: var(--nav-background-color);
		padding: 20px 35px;
		@media (max-width: ${props => props.theme.screens.medium}) {
			height: 45px + 15px;
		}
		${props => props.isOpen && `
			height: 100%;
		`}
	`, {
		Title
	}
)

export default Nav;