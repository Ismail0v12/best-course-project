import {useTheme} from "app/providers/theme-provider";
import {classNames} from "shared/lib/classNames";

import AppRouter from "app/router/ui/app-router";
import {AppNavbar} from "widgets/navbar";
import {Sidebar} from "widgets/sidebar";


export const App = () => {
  const {theme} = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <AppNavbar/>
      <div className="app__page">
        <Sidebar/>
        <AppRouter/>
      </div>
    </div>
  );
};

