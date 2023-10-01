import {classNames} from "shared/lib/classNames";
import "./loader.scss";

export const Loader = () => {
  return (
    <div className={classNames("lds-ellipsis")}>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  );
};
