import {DynamicProps, IFlyJSS} from "./types";
import {
  createAtomicClassName,
  getAtomicClassNames,
  getUniqueKeysFromArray,
  getUniqueWordsFromString,
} from "./utils";

const fly: IFlyJSS = {
  create: (classes) => {
    /**
     * Use the classes created pass by keys by arguments
     * Example: styles.props("a")
     */
    const propsClassNames = (...keyClassNames) => {
      const uniqueKeysFromString = getUniqueKeysFromArray(keyClassNames);
      const atomicClassNames = getAtomicClassNames(
        classes,
        ...uniqueKeysFromString
      );
      return getUniqueWordsFromString(atomicClassNames);
    };

    /**
     * Use the key property with dynamic properties passed in functions
     * Example: styles.dynamic.title({fontSize:"2rem"})
     */
    const dynamicClassNames = (() => {
      const dynamicFunctions: DynamicProps<typeof classes> = {};
      for (const key of Object.keys(classes)) {
        if (typeof classes[key] === "function") {
          dynamicFunctions[key] = (props) => {
            return createAtomicClassName(classes[key](props));
          };
        }
      }
      return dynamicFunctions;
    })();

    return {
      props: propsClassNames,
      dynamic: dynamicClassNames,
    };
  },
};

export default fly;
