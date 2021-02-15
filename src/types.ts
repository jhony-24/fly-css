import {CSSObject} from "cxs";

/**
 * Return function to receive custom classNames
 */
export type GetClassNames<T> = (
	...keyClassNames: (T | Record<string, unknown>)[]
) => string;

/**
 * Create object with key and CSS properties
 */
export type ItemClassName<T> = { [key in keyof T]: CSSObject };

/**
 * Base structure of object Fly-JSS
 */
export interface IFlyJSS {
	/**
	 * Create a instance of a dynamic style
	 */
	create<T>(classes: ItemClassName<T>): GetClassNames<keyof typeof classes>;
}
