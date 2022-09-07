import styled from "styled-components";

const Item = styled.li`
	display: inline-block;
	a {
		padding: 5px 10px;
		display: block;
	}
`;

const Menu = Object.assign(
	styled.ul`
		margin: 0;
		padding: 0;
		text-align: center;
	`, {
		Item
	}
)

export default Menu;