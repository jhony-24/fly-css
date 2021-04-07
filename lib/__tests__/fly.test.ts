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
      floating: ({background}) => ({
        background,
      }),
    });
  });

  describe('Usage of "props"', () => {
    it("should empty classes", () => {
      expect(styles.props()).toBe("");
    });

    it("should have three class names", () => {
      expect(styles.props("title", "button").split(" ")).toHaveLength(3);
    });

    it("should not have class names if receive an false argument", () => {
      expect(styles.props(false, null, undefined)).toBe("");
    });

    it("should get one class name from property title", () => {
      const objectProps = styles.props({
        title: true,
        button: false,
      });
      expect(objectProps.split(" ")).toHaveLength(1);
    });

    it("should prevent errors when not exists a prop", () => {
      expect(styles.props("bad-prop")).toBe("");
    });
  });

  describe('Use of "dynamics"', () => {
    it("should get correct class names", () => {
      const getClassNames = styles.dynamic.floating({
        background: " blue",
      });
      expect(getClassNames.split(" ")).toHaveLength(1);
    });
  });

  describe('Use of "compose"', () => {
    it("should compose styles and unify", () => {
      const composeStyles = styles.compose(
        styles.props("title"),
        styles.props("button")
      )
      expect(composeStyles.split(" ")).toHaveLength(3);
    })
  })
  
});
