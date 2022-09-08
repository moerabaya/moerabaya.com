import styled, { MenuItemInterface } from "styled-components";

const Item = styled.li<MenuItemInterface>`
	display: inline-block;
	padding: 0 0.5em;
	a {
		display: block;
		text-decoration: none;
		opacity: ${ props => props.active ? 1 : 0.6};
		transition: 0.25s ease;
		outline: none;
		&:hover {
			opacity: 1;
		}
	}
`;

const Menu = Object.assign(
	styled.ul`
		margin: 0;
		padding: 0 1.5em;
		text-align: end;
	`, {
		Item
	}
)

export default Menu;