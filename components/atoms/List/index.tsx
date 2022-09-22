import styled from "styled-components";
import { mixins } from "../../../styles";


const Header = styled.h4`
`;


const Item = styled.li`
	margin-bottom: 0.75em;
`;

const List = Object.assign(
	styled.ul`
		margin: 0;
		padding: 0;
	`, {
		Header,
		Item
	});


export default List;