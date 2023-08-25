import React, {FC} from "react";
import {classNames} from "shared/lib/classNames";

import cls from "./navbar.module.scss";
import {AppLink} from "shared/ui/app-link";
import {useTranslation} from "react-i18next";


interface AppNavbarProps {
  clazz?: string;

}

export const AppNavbar: FC<AppNavbarProps> = (props) => {
  const {clazz, ...others} = props;
  const {t} = useTranslation()
  return (
    <div className={classNames(cls.navbar, {}, [clazz])} {...others}>
      <div className={cls.links}>
        <AppLink to="/">{t("Home Page")}</AppLink>
        <AppLink to="/about">{t('About Page')}</AppLink>
      </div>
    </div>
  )
}