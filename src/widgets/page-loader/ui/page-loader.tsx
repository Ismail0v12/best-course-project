import {classNames} from "shared/lib/classNames";
import "./page-loader.scss";
import {Loader} from "shared/ui";

export const PageLoader = () => {
  return (
    <div className={classNames("loader")}>
      <Loader/>
    </div>
  );
};

