// import original module declarations
import { ReactElement } from "react";
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

  export interface ComponentProps {
    hide?: ScreenSizes[] | ScreenSizes;
    show?: ScreenSizes[] | ScreenSizes;
  }

  export interface GridProps extends ComponentProps {
    fluid?: ScreenSizes[] | ScreenSizes;
  }

  export interface FlexComponentProps extends ComponentProps {
    fullHeight?: boolean;
    alignItems?: "flex-start" | "flex-end" | "center";
    justifyContent?: "flex-start" | "flex-end" | "center";
  }

  export interface TextProps {
    opacity?: number = 1;
    smallCaps?: boolean;
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

  export interface IconProps {
    size: number | string;
    slot?: "start" | "end" | "left" | "right";
  }

  export interface ButtonComponent extends ComponentProps {
    size?: "sm" | "md" | "lg" = "sm";
    isActive?: boolean = false;
    smallCaps?: boolean = false;
    alternative?: boolean = false;
    layout?: "full" | "block";
  }

  export interface MenuItemComponent extends ComponentProps {
    active?: boolean = false;
  }

  export interface LinkProps
    extends TextProps,
      React.HTMLProps<HTMLAnchorElement> {
    animated?: boolean = false;
    href: Url;
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
