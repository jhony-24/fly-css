import {css} from "../utils";

describe("css Util of fly-jss", () => {
  it("Should get a object from css string", () => {
    const background = "red";
    const color = "blue";

    const cssObject = css`
      background: red;
      color: blue;
    `;

    const cssObjectExpected = {
      background,
      color,
    };
    expect(cssObject).toEqual(cssObjectExpected);
  });

  it("Should get a object dynamic from css string passing multiple arguments", () => {
    const background = "red";
    const color = "blue";
    const borderRadius = "10px";

    const cssObject = css`
      background: ${background};
      color: ${color};
      border: 2px solid blue;
      border-radius: ${borderRadius};
    `;

    const cssObjectExpected = {
      background,
      color,
      borderRadius,
      border: "2px solid blue",
    };
    expect(cssObject).toEqual(cssObjectExpected);
  });
});
