import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "shared/config/routeConfig";
import {PageLoader} from "widgets/page-loader";

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routerConfig).map(({element, path}) =>
        <Route
          key={path}
          path={path}
          element={<Suspense fallback={<PageLoader/>}>
            <div className="app__page-content">{element}</div>
          </Suspense>}/>
      )}
    </Routes>
  );
};

export default AppRouter;