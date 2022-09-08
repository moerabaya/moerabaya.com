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
	export interface ButtonInterface {
		size: "small" | "medium" | "large" = "small";
	}
  export interface MenuItemInterface {
    active?: boolean = false;   
  }
}