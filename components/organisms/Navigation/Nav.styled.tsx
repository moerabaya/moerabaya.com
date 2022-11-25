import styled, { css } from "styled-components";
import { mixins } from "styles";

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
    height: ${45 + 15}px;
    padding: 1em 1em;
    overflow: hidden;
    transition: 0.25s ease;
    background-color: var(--nav-background-color);
    @media (min-width: ${(props) => props.theme.screens.medium}) {
      height: 75px !important;
      padding: 20px 35px;
    }
    ${(props) =>
      props.isOpen &&
      css`
        height: 100% !important;
      `}
  `,
  {
    Title,
  }
);

export default Nav;
