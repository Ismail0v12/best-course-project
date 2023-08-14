import {createRoot} from "react-dom/client";
import {App} from "./app";
import {BrowserRouter} from "react-router-dom";
import './styles/index.scss'
import {ThemeContextProvider} from "./theme/ThemeContext";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App/>
    </ThemeContextProvider>
  </BrowserRouter>
)