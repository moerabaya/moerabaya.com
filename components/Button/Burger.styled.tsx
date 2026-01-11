import React from "react";
import clsx from "clsx";

import * as styles from "./Burger.css";
import Button from "./Button.styled";

export const Burger = ({
  isActive,
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & { isActive?: boolean }) => {
  return (
    <Button
      aria-label="Menu Button"
      className={clsx(
        "relative h-[40px] max-w-[40px] cursor-pointer text-center max-sm:hidden max-sm:px-[7.5px]",
        styles.base,
        isActive && styles.active,
        className
      )}
      variant="secondary"
      layout="icon"
      {...props}
    />
  );
};

Burger.displayName = "Burger";
