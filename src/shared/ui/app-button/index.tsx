import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "shared/lib/classNames";

import cls from "./app-button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...others
  } = props;
  return (
    <button
      className={
        classNames(cls.button, {}, [className, cls[theme]])
      }
      {...others}
    >
      {children}
    </button>
  )
}