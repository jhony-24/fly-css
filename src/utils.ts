import cxs from "cxs";
import { ItemClassName } from "./types";

export function getUniqueKeysFromArray(
	classNames:
		| (string | boolean | undefined)[]
		| undefined
		| null
		| Record<string, unknown>
		| string
) {
	let uniqueKeys = [];
	if (Array.isArray(classNames)) {
		uniqueKeys = classNames.filter(
			(current, index, array) => array.indexOf(current) === index
		);
		return uniqueKeys.filter((current) => typeof current === "string");
	}
	return [];
}

export function getUniqueWordsFromString(value: string): string {
	const splitWords = value.split(" ");
	return getUniqueKeysFromArray(splitWords).join(" ");
}

export function getUniqueAtomicClassNames<T, A>(
	cssObject: ItemClassName<T>,
	...keys: A[]
): string {
	const uniqueClassnames = getUniqueKeysFromArray(keys);
	const atomicClassnames = [];
	const lenUniqueClassNames = uniqueClassnames.length;
	let i = 0;
	while (i < lenUniqueClassNames) {
		const keyName = cssObject[uniqueClassnames[i]];
		atomicClassnames.push(cxs(keyName));
		i++;
	}
	return getUniqueWordsFromString(atomicClassnames.join(" "));
}
