import React, {FC} from "react";
import {classNames} from "shared/lib/classNames";
import cls from "./lang-switcher.module.scss";

import {Button, ButtonTheme} from "shared/ui";
import {useTranslation} from "react-i18next";

interface ThemeSwitcherProps {
  clazz?: string;
}

export const LangSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const {t, i18n} = useTranslation("translation");
  const {clazz, ...others} = props;

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? "en" : "ru")
  }

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleLang}
      className={classNames(cls.lang, {}, [clazz])}
      {...others}
    >
      {t('lang')}
    </Button>
  )
}