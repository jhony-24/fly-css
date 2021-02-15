/**
 * Return function to receive custom classNames
 */
type GetClassnames<T> = (
	...keyClassNames: (T | Record<string, unknown>)[]
) => string;

/**
 * Base structure of object Fly-JSS
 */
interface IFlyJSS {
	/**
	 * Create a instance of a dynamic style
	 */
	create<T>(
		classes: { [key in keyof T]: CSSObject }
	): GetClassnames<keyof typeof classes>;
}
