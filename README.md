# <p align="center"> Fly-JSS </p>

Optimized library to create "Atomic CSS in JS" inspired in **Stylex** at Facebook to prevent duplication of class names.

## Installation

To use the library you need to install the package typing the next command.

```console
$ npm i fly-jss
```

## Usage

The main way to use styles is instancing the method **create** of module. After whe use the method props to pass arguments.

```javascript
import fly from "fly-jss";

// Create base styles
const styles = fly.create({
 primary: {
   background: "blue",
   borderRadius : "20px",
 },
 flat: {
   border: "2px solid aqua",
 },
 text : {
   color : "red",
 }
});


/**
 * Using styles passing arguments
 * Result
 * .x1 { background:blue; }
 * .x2 { border-radius:20px; }
 * .x3 { color:red; }
 */
function A() {
  return(
    <div> 
      <button className={styles.props("primary","text")}>Primary button</button>
      <button className={styles.props("text")}>Secondary button</button>
    </div>
  )
}

/**
 * Passing arguments how object
 * the names are key of styles created, if the value is true it class will be added.
 * Result:
 * .x5 { border:2px solid aqua; }
 */
function B() {
  return(
    <button className={styles.props({
      primary : false,
      flat : true,
    })}>
     Dynamic button
    </button>
  )
}

```


Whe can create dynamic styles using a method in a property.

```javascript
import fly from "fly-jss";

// Create dynamic base styles
const styles = fly.create({
 title: ({ fontSize }) => ({
   fontSize,
   fontWeight: "bold",
 })
});

/**
 * Prevent duplication of class names generated
 * Result:
 * .x6 { font-size:2rem; }
 */
function App() {
 return (
  <div>
    <p classNames={styles.dynamic.title({ fontSize: "2rem" })}>Title 1</p>
    <p classNames={styles.dynamic.title({ fontSize: "2rem" })}>Title 1</p>
  </div>
 );
}
export default App;
```


The project uses below [CXS](https://github.com/cxs-css/cxs), a library with high performance, deduplicates repeated styles and zero dependencies.
If you wank to know most about this subject, in the next link [Atomic CSS-in-JS](https://sebastienlorber.com/atomic-css-in-js) you can learn how work it methodology.
