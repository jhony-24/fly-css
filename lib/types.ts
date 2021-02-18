import { CSSObject } from "cxs";

// Return function to receive custom classNames
export type GetClassNames<T> = (...keyClassNames: Array<T | boolean>) => string;

// Create object with key and CSS properties
export type ItemClassName<T> = {
  [key in keyof T]: CSSObject | ((props: CSSObject) => CSSObject);
};

export type DynamicProps<T> = {
  [key in keyof T]?: (props?: Record<string, string | number>) => string;
};

// Base structure of object Fly-JSS
export interface IFlyJSS {
  // Create a instance of a dynamic style
  create<T>(
    classes: ItemClassName<T>
  ): {
    props?: GetClassNames<keyof typeof classes> &
      ((props: { [key in keyof typeof classes]?: boolean }) => void);
    dynamic?: DynamicProps<T>;
  };
}
