// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
  
  export enum ScreenSize {
    Small = "500px",
    Medium = "768px",
    Large = "1280px",
    Xlarge = "1440px"
  }

  export type ScreenSizes = "xlarge" | "large" | "medium" | "small" | "all";
  export interface BaseComponent {
    hide?: ScreenSizes[],
    show?: ScreenSizes[]
  }
	export interface ButtonInterface extends BaseComponent {
		size?: "small" | "medium" | "large" = "small";
    isActive?: boolean = false;
	}
  export interface MenuItemInterface extends BaseComponent {
    active?: boolean = false;   
  }
  
}