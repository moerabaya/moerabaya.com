import styled, { ComponentProps, MenuItemComponent } from "styled-components";
import { Component } from "components/atoms/";

const Item = styled.li<MenuItemComponent>`
  display: inline-block;
  padding: 0 0.6em;
  a {
    display: block;
    text-decoration: none;
    opacity: ${(props) => (props.active ? 1 : 0.6)};
    transition: 0.15s ease-in-out;
    outline: none;
    &:hover {
      opacity: 1;
    }
  }
`;

const Menu = Object.assign(
  styled((props: any) => <Component {...props} as="ul" />)`
    margin: 0;
    padding: 0 0.75em;
    text-align: end;
  `,
  {
    Item,
  }
);

export default Menu;
