import type { FunctionComponent } from "react";

import type { ComponentClass } from "react";

export interface INavbarList {
  title: string;
  url: string;
  icon?:
    | React.ElementType
    | string
    | ComponentClass<unknown, unknown>
    | FunctionComponent<unknown>;
  isImage?: boolean;
  onClick?: () => void;
  className?: string;
  isSelected?: boolean;
  children?: INavbarList[];
  isExpanded?: boolean;
  isParent?: boolean;
}
