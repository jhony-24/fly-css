import fly from "..";

describe("Fly-jss", () => {
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
});
