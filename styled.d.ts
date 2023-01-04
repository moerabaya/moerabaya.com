// import original module declarations
import { Direction } from "moerabaya-components";
import { ReactElement } from "react";
import { LinkProps as NextLinkProps } from "next/link";
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    grid: {
      gutter: string;
      padding: string;
    };

    colors: {
      font: string;
      background: string;
    };

    screens: {
      [key: string]: string;
    };

    breakpoints: {
      [key: string]: string;
    };
  }

  export type ScreenSizes = "xlg" | "lg" | "md" | "sm" | "all";

  export interface GlobalStyleProps {
    direction: Direction;
  }

  export interface ComponentProps {
    hide?: ScreenSizes[] | ScreenSizes;
    show?: ScreenSizes[] | ScreenSizes;
    p?: string;
    m?: string;
  }

  export interface GridProps extends ComponentProps {
    fluid?: ScreenSizes[] | ScreenSizes;
  }

  export interface FlexComponentProps extends ComponentProps {
    fullHeight?: boolean;
    alignItems?: "flex-start" | "flex-end" | "center";
    justifyContent?: "flex-start" | "flex-end" | "center";
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
  }

  export interface TextProps extends ComponentProps {
    opacity?: number = 1;
    smallCaps?: boolean;
    textTransform?: "uppercase" | "lowercase";
    align?: "center" | "start" | "end" | "left" | "right";
    /**
     * number is in pixels
     */
    size?: number | string | "inherit" | "initial";
    weight?:
      | 100
      | 200
      | 300
      | 400
      | 500
      | 600
      | 700
      | 800
      | 900
      | "lighter"
      | "light"
      | "normal"
      | "bold"
      | "bolder";
    onHover?: {};
  }

  export interface AnimateProps {
    name: "wave";
    /**
     * number is in milliseconds
     */
    duration: number | string;
    iteration: number | "infinite";
    /**
     * number is in milliseconds
     */
    delay: number | string;
    /**
     * transform origin which allows the change the point that transformation occurs
     */
    origin: string;
  }

  export interface IconProps {
    size: number | string;
    slot?: "start" | "end" | "left" | "right";
  }

  export interface ButtonComponent
    extends ComponentProps,
      React.HTMLProps<HTMLAnchorElement> {
    size?: "sm" | "md" | "lg" = "sm";
    isActive?: boolean = false;
    smallCaps?: boolean = false;
    alternative?: boolean = false;
    layout?: "full" | "block";
    href?: string;
  }

  export interface MenuItemComponent extends ComponentProps {
    active?: boolean = false;
  }

  export interface LinkProps
    extends TextProps,
      NextLinkProps,
      React.HTMLProps<HTMLAnchorElement> {
    animated?: boolean = false;
    href: Url;
    // target?: "_blank" | "_self" | "_parent" | "_top";
    children?: ReactElement | string;
  }

  export interface RowProps extends FlexComponentProps {
    wrap?: boolean = true;
  }

  export interface ColProps extends ComponentProps {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  }
}
