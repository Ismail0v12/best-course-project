import {createRoot} from "react-dom/client";
import {App} from "app/app";
import {BrowserRouter} from "react-router-dom";
import {ThemeContextProvider} from "app/providers/theme-provider";

import "shared/config/i18next";
import "./app/styles/index.scss";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App/>
    </ThemeContextProvider>
  </BrowserRouter>
);