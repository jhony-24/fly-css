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

export function cssToObject(cssString: string) : object {
  const normalizeCSString = cssString
  .replace(/;/g, ",")
  .replace(/(\w*)\s?:\s?(\w*)/g, '"$1":"$2"')
  .replace(/(\n|\s)/gi, "");
  const jsonString = `{${normalizeCSString}}`;

  const indexLastComma = jsonString.lastIndexOf(",");
  const normalizeJsonString =
    jsonString.substr(0, indexLastComma) +
    jsonString.substr(indexLastComma + 1);

  const parseString = JSON.parse(normalizeJsonString);

  return parseString;
}


export function css(style : TemplateStringsArray) : CSSObject {
  if(style[0] === "") {
    return {}
  }
  return cssToObject(style[0] || "") as CSSObject;
}