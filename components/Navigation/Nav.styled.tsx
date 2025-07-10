import styled, { css } from "styled-components";

const Nav = styled.nav<{ isOpen?: boolean }>`
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
`;

export default Nav;
