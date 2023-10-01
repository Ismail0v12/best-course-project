import path from "path";
import {BuildEnv} from "./config/build/types/config";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";

export default (env: BuildEnv) => {

  const mode = env.mode || "development";
  const PORT = env.port || 3000;
  const isDev = mode === "development";

  return buildWebpackConfig({
    paths: {
      html: path.resolve(__dirname, "public", "index.html"),
      build: path.resolve(__dirname, "build"),
      entry: path.resolve(__dirname, "src", "index.tsx"),
      src: path.resolve(__dirname, "src")
    },
    mode,
    isDev,
    port: PORT,
  });
};