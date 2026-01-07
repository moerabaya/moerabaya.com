"use client";

import clsx from "clsx";

import * as styles from "./Nav.css";

type NavProps = {
  children?: React.ReactNode;
  $isOpen?: boolean;
} & React.HTMLAttributes<HTMLElement>;

const Nav = ({ children, $isOpen, className, ...rest }: NavProps) => {
  return (
    <nav
      className={clsx(styles.nav, $isOpen && styles.open, className)}
      {...rest}
    >
      {children}
    </nav>
  );
};

export default Nav;
