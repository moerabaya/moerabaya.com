"use client";

import React, { createContext, useCallback, useEffect } from "react";
import { useLocalStorage, useMedia } from "react-use";

type Theme = "light" | "dark";

interface ThemeInterface {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const defaultValue: ThemeInterface = {
  theme: "light",
  setTheme: (theme: Theme) => {
    defaultValue.theme = theme;
  },
};

export const ThemeContext = createContext<ThemeInterface>(defaultValue);

const ThemeProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const prefersDarkMode = useMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useLocalStorage<Theme>(
    "theme",
    prefersDarkMode ? "dark" : "light"
  );

  const changeTheme = useCallback(
    (theme: Theme) => {
      setTheme(theme);
    },
    [setTheme]
  );

  useEffect(() => {
    if (theme) {
      document.querySelector("html")?.setAttribute("data-theme", theme);
      document.querySelector("html")?.setAttribute("class", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme!, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
