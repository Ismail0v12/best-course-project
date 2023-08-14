export type Mode = "development" | "production";

export interface BuildPaths {
  readonly entry: string;
  readonly build: string;
  readonly html: string;
}

export interface BuildOptions {
  readonly mode: Mode;
  readonly paths: BuildPaths;
  readonly isDev: boolean;
  readonly port: number;
}

export interface BuildEnv {
  mode: Mode;
  port: number;
}