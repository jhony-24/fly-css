import {getAtomicClassNames, getUniqueKeysFromArray} from "../utils";

describe("Utils of fly-jss", () => {
  it("should get keys not repeating", () => {
    const testData = ["a1", "b1", "c1", "c1", "c1"];
    const expectedArray = ["a1", "b1", "c1"];
    const uniqueKeysFromArray = getUniqueKeysFromArray(testData);
    expect(uniqueKeysFromArray).toEqual(expectedArray);
    expect(uniqueKeysFromArray).toHaveLength(expectedArray.length);
  });

  it("should have classes original", () => {
    const testData = ["a1", "b1"];
    const expectedArray = ["a1", "b1"];
    const uniqueKeysFromArray = getUniqueKeysFromArray(testData);
    expect(uniqueKeysFromArray).toEqual(expectedArray);
    expect(uniqueKeysFromArray).toHaveLength(expectedArray.length);
  });

  it("Should return a empty array", () => {
    const values = [undefined, null, {}];
    values.forEach((value) => {
      expect(getUniqueKeysFromArray(value)).toEqual([]);
    });
  });

  it("should return total classNames equal to total params of object values", () => {
    /**
     * keys title: 2
     * keys button: 2
     * total keys when i put params: 4
     */
    const styles = {
      title: {
        color: "red",
        border: "2px solid blue",
      },
      button: {
        background: "green",
        color: "red",
      },
    };
    const getParams = ["title", "button"];
    const classNames = getAtomicClassNames(styles, ...getParams);
    expect(classNames.split(" ")).toHaveLength(4);
  });

  it("should return one className of title", () => {
    const styles = {
      title: {
        color: "red",
      },
    };
    const getParams = ["title"];
    const classNames = getAtomicClassNames(styles, ...getParams);
    expect(classNames.split(" ")).toHaveLength(1);
  });

  it("should return nothing classNames if params not is a string", () => {
    const styles = {
      title: {
        color: "red",
      },
    };
    const getParams = [false, null];
    const classNames = getAtomicClassNames(styles, ...getParams);
    expect(classNames).toHaveLength(0);
  });
});
