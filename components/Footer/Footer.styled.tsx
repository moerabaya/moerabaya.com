import styled from "styled-components";

export default styled.footer`
  background: var(--footer-background-color);
  color: var(--footer-font-color);
  padding: 2rem 0;
  position: fixed;
  z-index: 0;
  bottom: 0;
  left: 0;
  right: 0;

  > div {
    transition: 0.25s ease-in-out;
  }

  a {
    color: var(--footer-font-color);
    &:visited {
      color: var(--footer-font-color);
    }
  }
`;
