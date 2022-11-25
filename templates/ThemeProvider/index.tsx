import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeInterface {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const getMediaQueryPreference = function (): Theme {
  if (typeof window !== "undefined") {
    const mediaQuery = "(prefers-color-scheme: dark)";
    const mql = window.matchMedia(mediaQuery);
    const hasPreference = typeof mql.matches === "boolean";
    if (hasPreference) {
      return mql.matches ? "dark" : "light";
    }
  }
  // return default
  return "light";
};
const storeUserSetPreference = (pref: Theme) => {
  localStorage.setItem("theme", pref);
};
const getUserSetPreference = () => {
  return localStorage.getItem("theme");
};

const mediaQueryPreference = getMediaQueryPreference();

const defaultValue: ThemeInterface = {
  theme: "light",
  setTheme: (theme: Theme) => {},
};

export const ThemeContext = createContext<ThemeInterface>(defaultValue);

const ThemeProvider: React.FC<{ children: any }> = ({ children, ...rest }) => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? (document.querySelector("html")?.getAttribute("data-theme") as Theme)
      : "light"
  );

  const changeTheme = (theme: Theme, storePref = true) => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
    if (storePref && theme != mediaQueryPreference) {
      storeUserSetPreference(theme);
    } else {
      localStorage.removeItem("theme");
    }
    document.querySelector("html")?.setAttribute("data-theme", theme);
    setTheme(theme);
  };
  const root = typeof window !== "undefined" ? document.documentElement : null;

  useEffect(() => {
    const initialColorValue = root?.style.getPropertyValue(
      "--initial-color-mode"
    );
    setTheme(initialColorValue as Theme);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    /**
     * Support old browsers safari
     */
    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        const storedTheme = getUserSetPreference();
        if (!storedTheme) changeTheme(newColorScheme, false);
      });
    } else {
      mediaQuery.addListener((event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        const storedTheme = getUserSetPreference();
        if (!storedTheme) changeTheme(newColorScheme, false);
      });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
