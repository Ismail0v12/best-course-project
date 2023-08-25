import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/main-page";
import {AboutPage} from "pages/about-page";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
}

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    element: <MainPage/>,
    path: RoutePaths.main
  },
  [AppRoutes.ABOUT]: {
    element: <AboutPage/>,
    path: RoutePaths.about
  }
}