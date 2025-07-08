import styled, { css } from "styled-components";
import { mixins } from "styles";

interface Props {
  readonly isOpen: boolean;
}

const Title = styled.span`
  font-size: 1.1em;
  vertical-align: middle;
  margin: 0 0.5em;
  font-size: var(--base-small-caps-size);
  ${mixins.smallCaps}
  &:only-child {
    margin: 0;
  }
`;

const Nav = Object.assign(
  styled.nav<Props>`
    backdrop-filter: blur(25px);
    position: fixed;
    width: 100%;
    z-index: 100;
    height: ${45 + 15}px;
    padding: 1em 1em;
    overflow: hidden;
    transition: 0.25s ease height;
    background-color: var(--nav-background-color);
    @media (min-width: ${(props) => props.theme.screens.small}) {
      height: 67.5px;
      padding: 12px 35px;
    }
    @media (min-width: ${(props) => props.theme.screens.medium}) {
      height: 75px !important;
      padding: 15px 35px;
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
