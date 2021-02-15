import { CSSObject } from "cxs";

/**
 * Return function to receive custom classNames
 */
export type GetClassnames<T> = (
	...keyClassNames: (T | Record<string, unknown>)[]
) => string;

/**
 * Base structure of object Fly-JSS
 */
export interface IFlyJSS {
	/**
	 * Create a instance of a dynamic style
	 */
	create<T>(
		classes: { [key in keyof T]: CSSObject }
	): GetClassnames<keyof typeof classes>;
}
