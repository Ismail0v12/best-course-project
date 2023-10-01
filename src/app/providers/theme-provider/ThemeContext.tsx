import {createContext, Dispatch, FC, ReactNode, SetStateAction, useMemo, useState} from "react";

export const enum THEME {
  LIGHT = "light",
  DARK = "dark"
}

export const THEME_LOCALSTORAGE_KEY = "theme";

interface ThemeContextProps {
  theme?: THEME;
  setTheme?: Dispatch<SetStateAction<THEME>>;
}

const ThemeContext = createContext<ThemeContextProps>({});


export const ThemeContextProvider: FC<{ children: ReactNode }> = ({children}) => {
  const defaultTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as THEME || THEME.LIGHT;
  const [theme, setTheme] = useState(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme, setTheme
  }), [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;