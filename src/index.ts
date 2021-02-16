import { IFlyJSS } from "./types";
import {
  createAtomicClassName,
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

    const dynamicClassNames = (() => {
      let dynamicFunctions: any = {};
      for (const key of Object.keys(classes)) {
        if (typeof classes[key] === "function") {
          dynamicFunctions = {
            [key]: (props) => {
              return createAtomicClassName(classes[key](props));
            },
          };
        }
      }
      return dynamicFunctions;
    })();

    return {
      props: classNames,
      dynamic: dynamicClassNames,
    };
  },
};

export default fly;
