declare module "*.scss" {
  interface IClassNames {
    [className: string]: string
  }

  const classNames: IClassNames;
  export = classNames;
}

declare module "*.svg" {
  import React = require("react");
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";

declare const __IS__DEV__: boolean;