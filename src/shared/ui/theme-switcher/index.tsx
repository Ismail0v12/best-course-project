import React, {FC} from "react";
import {classNames} from "shared/lib/classNames";
import {THEME, useTheme} from "app/providers/theme-provider";
import cls from "./theme-switcher.module.scss";
import ThemeDark from "shared/assets/icons/theme-dark.svg";
import LightDark from "shared/assets/icons/theme-light.svg";
import {Button, ButtonTheme} from "shared/ui";

interface ThemeSwitcherProps {
  clazz?: string;

}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const {clazz, ...others} = props;

  const {theme, toggleTheme} = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.themeSwitcher, {}, [clazz])}
      {...others}
    >
      {theme === THEME.DARK ? <ThemeDark/> : <LightDark/>}
    </Button>
  )
}