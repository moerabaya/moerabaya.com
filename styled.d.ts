// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export enum ScreenSize {
    Small = "500px",
    Medium = "768px",
    Large = "1280px",
    xLarge = "1440px",
  }

  export interface DefaultTheme {
    borderRadius: string;

    grid: {
      gutter: string;
      padding: string
    },

    colors: {
      font: string;
      background: string;
    };

    screens: {
      [key: string]: string;
    }
  }

  export type ScreenSizes = "xlg" | "lg" | "md" | "sm" | "all";

  export interface BaseComponent {
    hide?: ScreenSizes[] | ScreenSizes,
    show?: ScreenSizes[] | ScreenSizes,
    container?: boolean
  }

  export interface TextProps {
    opacity?: number = 1;
    smallCaps?: boolean;
    onHover?: {};
  }

  export interface ButtonComponent extends BaseComponent {
		size?: "sm" | "md" | "lg" = "sm";
    isActive?: boolean = false;
    smallCaps?: boolean = false
	}

  export interface MenuItemComponent extends BaseComponent {
    active?: boolean = false;   
  }

  export interface LinkProps extends TextProps {
    animated?: boolean = false;
  }

  export interface RowProps {
    wrap?: boolean = true;
  }

  export interface ColumnProps extends BaseComponent {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  }
}