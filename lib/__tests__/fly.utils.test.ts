import fly from "..";

describe('Fly-jss / use of "compose"', () => {
  it("should compose styles and unify", () => {
    const styles = fly.create({
        title: {
          color: "red",
        },
        button: {
          color: "blue",
          fontSize: "2em",
        },
    });
    const composeStyles = fly.compose(
        styles("title"),
        styles("button")
    );
    expect(composeStyles.split(" ")).toHaveLength(3);
  });
});
