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

    colors: {
      font: string;
      background: string;
    };

    screens: {
      [key: string]: string;
    }
  }

  export type ScreenSizes = "xlarge" | "large" | "medium" | "small" | "all";

  export interface BaseComponent {
    hide?: ScreenSizes[],
    show?: ScreenSizes[]
  }

  export interface ButtonComponent extends BaseComponent {
		size?: "small" | "medium" | "large" = "small";
    isActive?: boolean = false;
    smallCaps?: boolean = false
	}

  export interface MenuItemComponent extends BaseComponent {
    active?: boolean = false;   
  }
}