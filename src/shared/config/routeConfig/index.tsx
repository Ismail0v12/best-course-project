import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/main-page";
import {AboutPage} from "pages/about-page";
import {NotFoundPage} from "pages/not-found-page";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PAGE_NOT_FOUND = "not_found"
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PAGE_NOT_FOUND]: "*"
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    element: <MainPage/>,
    path: RoutePaths.main
  },
  [AppRoutes.ABOUT]: {
    element: <AboutPage/>,
    path: RoutePaths.about
  },
  [AppRoutes.PAGE_NOT_FOUND]: {
    element: <NotFoundPage/>,
    path: RoutePaths.not_found
  }
};