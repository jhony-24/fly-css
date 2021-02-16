# <p align="center"> Fly-JSS </p>

Optimized library to create "Atomic CSS in JS" inspired in **Stylex** at Facebook.

## Installation

To use the library you need to install the package typing the next command.

```console
$ npm i add fly-jss
```

## Usage

```javascript
import fly from "fly-jss";

const styles = fly.create({
 primary: {
	background: "blue",
	color: "white",
 },
 flat: {
	color: "blue",
	border: "2px solid blue",
 },
});

function App() {
 return (
  <div>
   <button className={styles.props("primary")}>PRIMARY BUTTON</button>
   <button className={styles.props("flat")}>FLAT BUTTON</button>
  </div>
 );
}
export default App;
```

```javascript
import fly from "fly-jss";

const styles = fly.create({
 title: ({ fontSize }) => ({
	fontWeight: "bold",
	fontSize,
 }),
});

function App() {
 return (
  <div>
   <p classNames={styles.dynamic.title({ fontSize: "2rem" })}>Title 1</p>
  </div>
 );
}
export default App;
```

The project uses below [CXS](https://github.com/cxs-css/cxs), a library with high performance, deduplicates repeated styles and zero dependencies.
If you wank to know most about this subject, in the next link [Atomic CSS-in-JS] you can learn how work it methodology.
