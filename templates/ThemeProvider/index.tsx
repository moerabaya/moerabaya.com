import React, { createContext, Dispatch, SetStateAction, useState } from "react";

interface ThemeInterface {
	theme: string,
	setTheme: (theme: string) => void
}

const defaultValue = {
	theme: "light",
	setTheme: (theme: string) => {}
}
export const ThemeContext = createContext<ThemeInterface>(defaultValue);

const ThemeProvider:React.FC<{children: any}>  = ({children}) => {
	const [theme, setTheme] = useState(defaultValue.theme);
	return (
		<ThemeContext.Provider value={{theme, setTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider;