import {IFlyJSS, ItemClassName} from "./types";
import {
  getAtomicClassNames,
  getUniqueKeysFromArray,
  getUniqueWordsFromString,
} from "./utils";


function parseClassnamesFromObject<T,P>(classes: ItemClassName<T>,keys : P[]) {
  const atomicClassNames = getAtomicClassNames(
    classes,
    ...keys
  );
  return getUniqueWordsFromString(atomicClassNames); 
}

const fly: IFlyJSS = {
  create: (classes) => {
    /**
     * Use the classes created pass keys by arguments or a single object
     * Example:
     * styles("a")
     * styles({ a: true })
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
      const parse = parseClassnamesFromObject(classes,uniqueKeysFromString);
      return parse;
    };
    
    return propsClassNames;
  },
  createDynamic : (classes) => {
        /**
     * Use the key property with dynamic properties passed in functions
     * Example: styles({
     *   button : {
     *     size : "20px"
     *   }
     * })
     */
    const dynamicClassnames = (keyClassNames = null) => {
      if(keyClassNames) {
        const keysOfClassnames = Object.keys(keyClassNames);
        const dynamicClassnamesCreated : ItemClassName<typeof classes> | {} = {};
        for (const key of keysOfClassnames) {
            const currentCallbackStyle = classes[key]; 
            const valueOfClassname = keyClassNames[key];
            if(valueOfClassname) {
              dynamicClassnamesCreated[key] = currentCallbackStyle(valueOfClassname);
            }
        }
        const parse = parseClassnamesFromObject(dynamicClassnamesCreated,keysOfClassnames);
        return parse;
      }
      return "";
    }
    return dynamicClassnames;
  },
  compose : (...styles) => {
    return styles.join(" ");
  }
};

export default fly;
