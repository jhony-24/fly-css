import { IFlyJSS } from "./types";
import {
  getAtomicClassNames,
  getUniqueKeysFromArray,
  getUniqueWordsFromString,
} from "./utils";

const fly: IFlyJSS = {
  create: (classes) => {
    const classNames = (...keyClassNames) => {
      const uniqueKeysFromString = getUniqueKeysFromArray(keyClassNames);
      const atomicClassNames = getAtomicClassNames(
        classes,
        ...uniqueKeysFromString
      );

      return getUniqueWordsFromString(atomicClassNames);
    };

    if (Object.keys(classes).length) {
      return classNames;
    }
    return {
      a: "",
    };
  },
};

const e = fly.create({
  a: {
    color: "red",
  },
  b: {
    color: "blue",
  },
});

export default fly;
