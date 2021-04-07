import cxs, {CSSObject} from "cxs";
import {ItemClassName} from "./types";

export function getUniqueKeysFromArray(
  classNames:
    | (string | boolean | undefined | unknown)[]
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

export const createAtomicClassName = (props: CSSObject) => cxs(props);

export function getUniqueWordsFromString(value: string): string {
  const splitWords = value.split(" ");
  return getUniqueKeysFromArray(splitWords).join(" ");
}

export function getAtomicClassNames<T, A>(
  cssObject: ItemClassName<T>,
  ...keys: A[]
): string {
  const uniqueClassNames = getUniqueKeysFromArray(keys);
  const atomicClassNames = [];
  const lenUniqueClassNames = uniqueClassNames.length;
  let i = 0;
  while (i < lenUniqueClassNames) {
    const css = cssObject[uniqueClassNames[i]];
    if (css) {
      atomicClassNames.push(createAtomicClassName(css));
    }
    i++;
  }
  return atomicClassNames.join(" ");
}
