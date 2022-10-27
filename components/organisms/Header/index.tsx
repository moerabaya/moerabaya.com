import styled from "styled-components";
import { FlexComponent } from "components/atoms/";

const Header = styled(FlexComponent).attrs({
  as: "header",
})`
  padding-top: 60px;
  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    padding-top: 75px;
  } ;
`;

export default Header;
