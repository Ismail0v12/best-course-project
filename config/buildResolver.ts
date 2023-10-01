import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolver(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    alias: {},
    mainFiles: ["index"],
    modules: [options.paths.src, "node_modules"]

  };
}