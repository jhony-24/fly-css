import cxs, {CSSObject} from "cxs";
import {ItemClassName} from "./types";
import parse from "inline-style-parser";

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


export function hasHyphen(value : string) : boolean {
  return value.indexOf("-") !== -1;
}

export function camelize(wordString): string {
  const wordSplit = wordString.match(/-\w/g);
  const newWord = wordSplit.reduce((newWord, word) => {
    const replacementLastLetter = word[1].toUpperCase();
    const normalize = newWord.replace(word, replacementLastLetter);
    newWord = normalize;
    return newWord;
  }, wordString);
  return newWord.replace(/\w/, (wordString[0] || "").toLowerCase());
}

export function cssToObject(cssString: string): object {
  const styles = {};
  const inlineStyles = parse(cssString);
  const len = inlineStyles.length;
  for (let i = 0; i < len; i++) {
    const {property, value} = inlineStyles[i];
    styles[property] = value;
  }

  return styles;
}

export function css(style: TemplateStringsArray): CSSObject {
  if (style[0] === "") {
    return {};
  }
  return cssToObject(style[0] || "") as CSSObject;
}
