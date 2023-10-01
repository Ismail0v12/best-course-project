import ThemeContext, {THEME, THEME_LOCALSTORAGE_KEY} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
  theme: THEME;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {

  const {setTheme, theme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    setTheme(newTheme);
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, newTheme);
  };


  return {toggleTheme, theme};

}