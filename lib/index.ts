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
     * Use the classes created pass keys by arguments or a single object
     * Example:
     * styles.props("a")
     * styles.props({ a: true })
     */
    const propsClassNames = (...keyClassNames) => {
      const [firstValue] = keyClassNames;
      let normalizeClassNames = keyClassNames;
      if (typeof firstValue === "object") {
        const getKeysWithTrueProperty = Object.entries(firstValue)
          .filter(([, state]) => state)
          .map(([key]: [string, boolean]) => {
            return key;
          });
        normalizeClassNames = getKeysWithTrueProperty;
      }
      const uniqueKeysFromString = getUniqueKeysFromArray(normalizeClassNames);
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
  compose : (...styles) => {
    return styles.join(" ");
  }
};

export default fly;
