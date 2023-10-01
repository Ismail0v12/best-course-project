import {FC, useState} from "react";
import {classNames} from "shared/lib/classNames";
import cls from "./sidebar.module.scss";
import {LangSwitcher, ThemeSwitcher} from "shared/ui";

interface SidebarProps {
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const {...others} = props;
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [])}
      {...others}
    >
      <button onClick={toggleCollapse} style={{width: "100%"}}>Toggle</button>
      <div className={cls.togglers}>
        <ThemeSwitcher/>
        <LangSwitcher/>
      </div>
    </div>
  );
};