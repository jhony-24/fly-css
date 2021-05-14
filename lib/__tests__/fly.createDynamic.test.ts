import fly from "..";

describe("Fly-jss", () => {
  let styles;

  beforeEach(() => {
    styles = fly.createDynamic({
      baseButton: ({color}) => ({
        color,
      }),
      sizeButton : ({sizeButton}) => ({
         fontSize : sizeButton 
      }),
    });
  });

  test('should have empty classnames generated', () => {
    const classnames = styles();
    expect(classnames).toEqual("");
  })
  
  test('should have one classname of the prop baseButton', () => {
    const classnames = styles({
      baseButton : {
        color : "red",
      }
    });
    expect(classnames).not.toEqual("");
    expect(classnames.split(" ")).toHaveLength(1);
  })
  
});
