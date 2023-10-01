import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/classNames";
import cls from "./not-found-page.module.scss";

export const NotFoundPage = () => {
  const {t} = useTranslation();


  return (
    <div className={classNames(cls["not-found"])}>
      {t("Page not found")}
    </div>
  );
};

