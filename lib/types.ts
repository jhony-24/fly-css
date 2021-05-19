import {CSSObject} from "cxs";

export type DynamicProps<T> = {
  [key in keyof T]?: (props?: Record<string, string | number>) => string;
};

// Return function to receive custom classNames that exists in the instance
export type GetUnionClassNames<T> = (
  ...keyClassNames: Array<T | boolean>
) => string;

// Return function to receive custom classNames how object that exists in the instance
export type GetObjectClassNames<T> = (
  keyClassNames: { [key in keyof T]?: boolean }
) => string;

// Create object with key and CSS properties
export type ItemClassName<T> = {
  [key in keyof T]: CSSObject | string;
};

// Return a object styles css
export type GetDynamicClassnames<T, K extends keyof T> = Record<
  K,
  (e?: any) => CSSObject | string
>;

// Get types of properties function
export type GetPropMethod<T> = T extends (args: infer U) => void
  ? Partial<U>
  : any;

// Get function with dynamic props or boolean value if it does not have parameters
export type GetDynamicCallbackProps<T, K extends keyof T> = (
  args: {
    [key in K]?: GetPropMethod<T> | boolean;
  }
) => string;

// Base structure of object Fly-JSS
export interface IFlyJSS {
  // Create a instance of core styles
  create<T, K extends keyof T>(
    classes: ItemClassName<T>
  ): GetUnionClassNames<K> & GetObjectClassNames<T>;

  // Create a instance of dynamic styles
  createDynamic<T, K extends keyof T>(
    classes: GetDynamicClassnames<T, K>
  ): GetDynamicCallbackProps<T, K>;

  // Compose diferent styles
  compose(...styles: string[]): string;
}
