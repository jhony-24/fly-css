import fly, {css} from "..";

describe("Fly-jss / create", () => {
  let styles;

  beforeEach(() => {
    styles = fly.create({
      title: {
        color: "red",
      },
      button: {
        color: "blue",
        fontSize: "2em",
      },
    });
  });

  it("should empty classes", () => {
    expect(styles()).toBe("");
  });

  it("should have three class names", () => {
    expect(styles("title", "button").split(" ")).toHaveLength(3);
  });

  it("should not have class names if receive an false argument", () => {
    expect(styles(false, null, undefined)).toBe("");
  });

  it("should get one class name from property title", () => {
    const objectProps = styles({
      title: true,
      button: false,
    });
    expect(objectProps.split(" ")).toHaveLength(1);
  });

  it("should prevent errors when not exists a prop", () => {
    expect(styles("bad-prop")).toBe("");
  });

  it("should generate only 2 class names", () => {
    const textStyles = fly.create({
      title : css`
        background: red;
        color: blue;
      `
    });
    expect(textStyles("title").split(" ")).toHaveLength(2);
  });

});
