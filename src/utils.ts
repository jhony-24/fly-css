/**
 *
 */
export function getUniqueKeysFromArray(
	classNames: string[] | undefined | null | Record<string, unknown> | string
) {
	let uniqueKeys = [];
	if (Array.isArray(classNames)) {
		uniqueKeys = classNames.filter(
			(current, index, array) => array.indexOf(current) === index
		);
		return uniqueKeys;
	}
	return [];
}
