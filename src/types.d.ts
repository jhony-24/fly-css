/**
 * Return function to receive custom classNames
 */
type SpreadKeynames<T> = (
	...keyClassNames: (T | Record<string, unknown>)[]
) => string;

/**
 * Base structure of object Fly-JSS
 */
interface IFlyJSS {
	create<T>(
		classes: { [key in keyof T]: CSSObject }
	): SpreadKeynames<keyof typeof classes>;
}
