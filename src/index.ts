import { IFlyJSS } from "./types";
import {
  getAtomicClassNames,
  getUniqueKeysFromArray,
  getUniqueWordsFromString,
} from "./utils";

const fly: IFlyJSS = {
  create: (classes) => (...keyClassNames) => {
    const uniqueKeysFromString = getUniqueKeysFromArray(keyClassNames);
    const atomicClassNames = getAtomicClassNames(
      classes,
      ...uniqueKeysFromString
    );
    return getUniqueWordsFromString(atomicClassNames);
  },
};

export default fly;
