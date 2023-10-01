import {FC, ReactNode} from "react";
import {classNames} from "shared/lib/classNames";
import {Link, LinkProps} from "react-router-dom";

import cls from "./app-link.module.scss";

enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  clazz?: string;
  children: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {clazz, children, theme = AppLinkTheme.PRIMARY, ...others} = props;
  return (
    <Link className={classNames(cls.link, {}, [clazz, cls[theme]])} {...others}>{children}</Link>
  );
};