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
  });

  describe('Use of "dynamics"', () => {
    it("should get correct class names", () => {
      const getClassNames = styles({
        floating : {
          background: " blue",
        }
      });
      expect(getClassNames.split(" ")).toHaveLength(1);
    });
  });

  describe('Use of "compose"', () => {
    it("should compose styles and unify", () => {
      const composeStyles = fly.compose(
        styles("title"),
        styles("button")
      )
      expect(composeStyles.split(" ")).toHaveLength(3);
    })
  })
  
});
